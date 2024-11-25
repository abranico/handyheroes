using Application.Models.Requests;
using Domain.Entities;
using Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using BCrypt.Net;
using System.Text;
using System.Threading.Tasks;
using Domain.Exceptions;
using Application.Interfaces;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.Extensions.Configuration;
using System.Security.Cryptography;

namespace Infrastructure.Services
{
    public class AuthenticationService : IAuthenticationService
    {
        private readonly IUserRepository _userRepository;
        private readonly IConfiguration _config;

        public AuthenticationService(IUserRepository userRepository, IConfiguration configuration)
        {
            _userRepository = userRepository;
            _config = configuration;
        }

        public async Task<string> Authenticate(AuthenticationRequest request)
        {           
            User user = await ValidateUser(request) ?? throw new NotAllowedException("User authentication failed");

            string accessToken = GenerateAccessToken(user);
            string refreshToken = GenerateRefreshToken();

            user.RefreshToken = refreshToken;
            user.RefreshTokenExpiryTime = DateTime.UtcNow.AddDays(int.Parse(_config["Authentication:ExpirationTimeInDays"]!));

            await _userRepository.Update(user);

            return accessToken;
        }

        public async Task Logout(int userId)
        {
            var user = await _userRepository.GetById(userId) ?? throw new NotFoundException("Session not found");

            user.RefreshToken = null;
            user.RefreshTokenExpiryTime = null;

            await _userRepository.Update(user);
        }

        
        
        public async Task<string> RefreshToken(string refreshToken)
        {
            var user = await _userRepository.GetByRefreshToken(refreshToken);

            if(user == null || user.RefreshTokenExpiryTime <= DateTime.UtcNow)
            {
                throw new SecurityTokenException("Invalid or expired refresh token.");
            }

            string accessToken = GenerateAccessToken(user);

            return accessToken;
        }

        private async Task<User?> ValidateUser(AuthenticationRequest request)
        {
            var user = await _userRepository.GetByEmail(request.Email);

            if (user == null || !BCrypt.Net.BCrypt.Verify(request.Password, user.Password))
            {
                return null;
            }

            return user;
        }

        private string GenerateAccessToken(User user)
        {
            var securityPassword = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(_config["Authentication:SecretForKey"]!));
            var credentials = new SigningCredentials(securityPassword, SecurityAlgorithms.HmacSha256);
            
            var claims = new List<Claim>()
            {
                new Claim("sub", user.Id.ToString()),
                new Claim("given_name", user.FirstName),
                new Claim("role", user.Role.ToString())
            };

            var token = new JwtSecurityToken(
              _config["Authentication:Issuer"],
              _config["Authentication:Audience"],
              claims,
              DateTime.UtcNow,
              DateTime.UtcNow.AddMinutes(int.Parse(_config["Authentication:ExpirationTimeInMinutes"]!)),
              credentials);

            var accessToken = new JwtSecurityTokenHandler().WriteToken(token);
            return accessToken.ToString();
        }
        
        private string GenerateRefreshToken()
        {
            var randomNumber = new byte[32];
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(randomNumber);
                return Convert.ToBase64String(randomNumber);
            }
        }

    }
}

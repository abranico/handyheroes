using Application.Interfaces;
using Application.Models;
using Application.Models.Requests;
using Domain.Entities;
using Domain.Enums;
using Domain.Exceptions;
using Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<List<UserDto>> GetAll()
        {
            var users = await _userRepository.GetAll();
            return users.Select(UserDto.FromEntity).ToList();
        }

        public async Task<UserDto?> GetByUsername(string username)
        {
            var user = await _userRepository.GetByUsername(username) ?? throw new NotFoundException($"Usuario {username} no encontrado");
            return UserDto.FromEntity(user);
        }

        public async Task PartialUpdate(int id, UserPartialUpdateRequest newUser)
        {
            var user = await _userRepository.GetById(id) ?? throw new NotFoundException($"Usuario {id} no encontrado");

            if (newUser.firstName != null) { user.FirstName = newUser.firstName; }
            if (newUser.lastName != null) { user.LastName = newUser.lastName; }
            if (newUser.username != null) { user.Username = newUser.username; }
            if (newUser.email != null) { user.Email = newUser.email; }
            if (newUser.password != null) { user.Password = BCrypt.Net.BCrypt.HashPassword(newUser.password); }
            if (newUser.profileImg != null) { user.ProfileImg = newUser.profileImg; }
            if (newUser.status.HasValue) { user.Status = newUser.status.Value; }
            if (newUser.role.HasValue) { user.Role = newUser.role.Value; }
            if (newUser.country != null) { user.Country = newUser.country; }
            if (newUser.city != null) { user.City = newUser.city; }
            if (newUser.description != null) { user.Description = newUser.description; }
            if (newUser.phoneNumber != null) { user.PhoneNumber = newUser.phoneNumber; }
            //if(newUser.serviceId.HasValue) { 
            //    user.Service = newUser.serviceId.Value; 
            //}

            await _userRepository.Update(user);
        }

        public async Task<UserDto> Create(UserCreateRequest newUser)
        {

            if (!Enum.TryParse<UserRole>(newUser.Role, true, out var userRole))
            {
                throw new ArgumentException($"El rol '{newUser.Role}' no es válido.");
            }

            User user = new User()
            {
                FirstName = newUser.firstName,
                LastName = newUser.lastName,
                Username = newUser.username,
                Email = newUser.email,
                Password = BCrypt.Net.BCrypt.HashPassword(newUser.password),
                Role = userRole
            };

            await _userRepository.Create(user);
            return UserDto.FromEntity(user);
        }

        public async Task Delete(int id)
        {
            User user = await _userRepository.GetById(id) ?? throw new NotFoundException($"Usuario ${id} no encontrado");
            await _userRepository.Delete(user);
        }
    }
}

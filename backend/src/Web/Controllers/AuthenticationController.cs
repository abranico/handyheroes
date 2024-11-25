using Application.Interfaces;
using Application.Models.Requests;
using Domain.Exceptions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;

namespace Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly IAuthenticationService _authenticationService;
        private readonly IConfiguration _configuration;

        public AuthenticationController(IAuthenticationService authenticationService, IConfiguration configuration)
        {
            _authenticationService = authenticationService;
            _configuration = configuration;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Authenticate([FromBody] AuthenticationRequest request)
        {
            try
            {
                string token = await _authenticationService.Authenticate(request);               

                HttpContext.Response.Cookies.Append("access_token", token,
                    new CookieOptions
                    {
                        HttpOnly = true,
                        Secure = true,
                        Expires = DateTime.UtcNow.AddMinutes(_configuration.GetValue<int>("Authentication:ExpirationTimeInMinutes")),
                        SameSite = SameSiteMode.None
                    });

                HttpContext.Response.Cookies.Append("refresh_token", token,
                    new CookieOptions
                    {
                        HttpOnly = true,
                        Secure = true,
                        Expires = DateTime.UtcNow.AddDays(_configuration.GetValue<int>("Authentication:ExpirationTimeInDays")),
                        SameSite = SameSiteMode.None
                    });

                return Ok();
            } 
            catch (NotAllowedException ex)
            {
                return Unauthorized(ex.Message);
            }
        }

        [HttpPost("refresh")]
        public async Task<IActionResult> RefreshToken()
        {
            try
            {
                var refreshToken = Request.Cookies["refresh_token"];
                if (string.IsNullOrEmpty(refreshToken))
                {
                    return Unauthorized("Refresh token is missing.");
                }

                string newAccessToken = await _authenticationService.RefreshToken(refreshToken);

                HttpContext.Response.Cookies.Append("access_token", newAccessToken,
                    new CookieOptions
                    {
                        HttpOnly = true,
                        Secure = true,
                        Expires = DateTime.UtcNow.AddMinutes(_configuration.GetValue<int>("Authentication:ExpirationTimeInMinutes")),
                        SameSite = SameSiteMode.None
                    });

                return Ok();
            }
            catch (SecurityTokenException ex)
            {
                return Unauthorized(ex.Message);
            }
        }

        [Authorize]
        [HttpDelete("logout")]
        public async Task<IActionResult> Logout()
        {
            var userId = int.Parse(User.FindFirst("sub")!.Value);
            Response.Cookies.Delete("access_token");
            Response.Cookies.Delete("refresh_token");
            try
            {
                await _authenticationService.Logout(userId);
                return Ok(new { message = "Logout succesfully" });

            } catch (NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
        }

    }
}

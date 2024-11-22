using Application.Interfaces;
using Application.Models.Requests;
using Domain.Exceptions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

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

        [HttpPost]
        public async Task<IActionResult> Authenticate([FromBody] AuthenticationRequest request)
        {
            try
            {
                var token = await _authenticationService.Authenticate(request);

                var cookieOptions = new CookieOptions
                {
                    HttpOnly = true,            
                    Secure = true,             
                    Expires = DateTime.UtcNow.AddMinutes(_configuration.GetValue<int>("Authentication:ExpirationTimeInMinutes")), 
                    SameSite = SameSiteMode.None
                };

                HttpContext.Response.Cookies.Append("access_token", token, cookieOptions);

                return Ok();
            } 
            catch (NotAllowedException ex)
            {
                return Unauthorized(ex.Message);
            }
        }
    }
}

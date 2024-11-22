using Application.Interfaces;
using Application.Models;
using Application.Models.Requests;
using Application.Services;
using Domain.Entities;
using Domain.Enums;
using Domain.Exceptions;
using Infrastructure.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Web.Controllers
{
    [Route("api/users")]
    [ApiController]
    [Authorize]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public async Task<IActionResult> Get([FromQuery] string? username)
        {
            if(username != null)
            {
                try
                {
                    return Ok(await _userService.GetByUsername(username));
                }
                catch (NotFoundException ex)
                {
                    return NotFound(ex.Message);
                }
            }

            return Ok(await _userService.GetAll());
        }

        [HttpPatch("{id}")]
        public async Task<IActionResult> PartialUpdate([FromRoute] int id, [FromBody] UserPartialUpdateRequest newUser)
        {
            try
            {
                await _userService.PartialUpdate(id, newUser);
                return NoContent();
            } 
            catch (NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody] UserCreateRequest newUser)
        {
            return Ok(await _userService.Create(newUser));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            try
            {
                await _userService.Delete(id);
                return NoContent();
            }
            catch(NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
}

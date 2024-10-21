using Application.Models;
using Application.Models.Requests;
using Domain.Entities;
using Domain.Exceptions;
using Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Interfaces
{
    public interface IUserService
    {
        Task<List<UserDto>> GetAll();
        Task<UserDto?> GetByUsername(string username);
        Task PartialUpdate(int id, UserPartialUpdateRequest newUser);
        Task<UserDto> Create(UserCreateRequest newUser);
        Task Delete(int id);
        
    }
}

using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Interfaces
{
    public interface IUserRepository : IRepositoryBase<User>
    {
        Task<List<User>> GetAll();
        Task<User?> GetByUsername(string username);
        Task<User?> GetById(int id);
        Task<User?> GetByEmail(string email);
        Task<User?> GetByRefreshToken(string refreshToken);
    }
}

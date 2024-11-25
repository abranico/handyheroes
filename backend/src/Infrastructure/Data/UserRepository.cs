using Domain.Entities;
using Domain.Enums;
using Domain.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data
{
   
    public class UserRepository : RepositoryBase<User>, IUserRepository
    {
        private readonly ApplicationContext _context;

        public UserRepository(ApplicationContext context) : base(context)
        {
            _context = context;
        }

        public override async Task<List<User>> GetAll()
        {
            return await _context.Users.Include(u => u.Service).ToListAsync();
        }

        public async Task<User?> GetById(int id)
        {
            return await _context.Users.Include(u => u.Service).FirstOrDefaultAsync(u => u.Id == id);
        }

        public async Task<User?> GetByUsername(string username)
        {
            return await _context.Users.Include(u => u.Service).FirstOrDefaultAsync(u => u.Username == username);
        }        

        public async Task<User?> GetByEmail(string email)
        {
            return await _context.Users.Include(u => u.Service).FirstOrDefaultAsync(u => u.Email == email);
        }
        
        public async Task<User?> GetByRefreshToken(string refreshToken)
        {
            return await _context.Users.Include(u => u.Service).FirstOrDefaultAsync(u => u.RefreshToken == refreshToken);
        }
    }
}

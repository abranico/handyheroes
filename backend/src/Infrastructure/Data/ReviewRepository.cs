using Domain.Entities;
using Domain.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data
{
    public class ReviewRepository : RepositoryBase<Review>, IReviewRepository
    {
        private readonly ApplicationContext _context;
        public ReviewRepository(ApplicationContext context) : base(context)
        {
            _context = context;
        }

        public override async Task<List<Review>> GetAll()
        {
            return await _context.Reviews.Include(u => u.Client).Include(u => u.Professional).ToListAsync();
        }

        public async Task<Review?> GetById(int id)
        {
            return await _context.Reviews.Include(u => u.Client).Include(u => u.Professional).FirstOrDefaultAsync(u => u.Id == id);
        }
    }
}

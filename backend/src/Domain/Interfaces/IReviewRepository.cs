using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Interfaces
{
    public interface IReviewRepository : IRepositoryBase<Review>
    {
        Task<List<Review>> GetAll();
        Task<Review?> GetById(int id);
    }
}

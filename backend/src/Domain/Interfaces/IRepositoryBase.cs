using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Interfaces
{
    public interface IRepositoryBase<T> where T : class
    {
        Task<List<T>> GetAll();
        Task<T?> GetById<TId>(TId id);
        Task<T> Create(T entity);
        Task Update(T entity);
        Task Delete(T entity);
        
    }
}

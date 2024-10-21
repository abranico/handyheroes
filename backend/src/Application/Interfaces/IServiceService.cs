using Application.Models.Requests;
using Application.Models;
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
    public interface IServiceService
    {
        Task<List<ServiceDto>> GetAll();
        Task<ServiceDto> Create(ServiceCreateRequest request);
        Task Update(int id, ServiceUpdateRequest request);
        Task Delete(int id);        
    }
}

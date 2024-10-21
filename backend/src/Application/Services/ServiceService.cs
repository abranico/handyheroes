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
using Application.Interfaces;

namespace Application.Services
{
    public class ServiceService : IServiceService
    {
        private readonly IServiceRepository _serviceRepository;
        public ServiceService(IServiceRepository serviceRepository)
        {
            _serviceRepository = serviceRepository;
        }

        public async Task<List<ServiceDto>> GetAll()
        {
            var services = await _serviceRepository.GetAll();
            return services.Select(ServiceDto.FromEntity).ToList();
        }

        public async Task<ServiceDto> Create(ServiceCreateRequest request)
        {

            var service = new Service
            {
                Name = request.name
            };

            return ServiceDto.FromEntity(await _serviceRepository.Create(service));
        }

        public async Task Update(int id, ServiceUpdateRequest request)
        {
            var service = await _serviceRepository.GetById(id) ?? throw new NotFoundException("service not found");
            service.Name = request.name;
            await _serviceRepository.Update(service);
        }

        public async Task Delete(int id)
        {
            var service = await _serviceRepository.GetById(id) ?? throw new NotFoundException("service not found");
            await _serviceRepository.Delete(service);
        }

    }
}

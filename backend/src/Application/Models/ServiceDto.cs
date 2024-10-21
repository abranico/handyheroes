using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Models
{
    public class ServiceDto
    {
        public int id { get; init; }
        public string name { get; init; }

        public static ServiceDto FromEntity(Service service)
        {
            return new ServiceDto
            {
                id = service.Id,
                name = service.Name
            };
        }
    }
}

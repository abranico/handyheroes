using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Models.Requests
{
    public class ReviewCreateRequest
    {
        public int clientId { get; set; }
        public int professionalId { get; set; }
        public string content { get; set; }
        public DateTime date { get; set; }
        public int rating { get; set; }
    }
}

using Domain.Entities;
using Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Models.Requests
{
    public class UserPartialUpdateRequest
    {
        public string? firstName { get; set; }
        public string? lastName { get; set; }
        public string? username { get; set; }
        public string? email { get; set; }
        public string? password { get; set; }
        public string? profileImg { get; set; }
        public bool? status { get; set; }
        public UserRole? role { get; set; }
        public string? country { get; set; }
        public string? city { get; set; }
        public string? description { get; set; }
        public string? phoneNumber { get; set; }
        public int? serviceId { get; set; }
    }
}

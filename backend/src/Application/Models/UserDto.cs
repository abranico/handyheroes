using Domain.Entities;
using Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Models
{
    public class UserDto
    {
        public int id { get; init; }
        public string firstName { get; init; }
        public string? lastName { get; init; }
        public string username { get; init; }
        public string email { get; init; }
        public string password { get; init; }
        public string? profileImg { get; init; }
        public bool status { get; init; }
        public string role { get; init; }
        public string? country { get; init; }
        public string? city { get; init; }
        public string? description { get; init; }
        public string? phoneNumber { get; init; }
        public string? service { get; init; }

        public static UserDto FromEntity(User user)
        {
            return new UserDto
            {
                id = user.Id,
                firstName = user.FirstName,
                lastName = user.LastName,
                username = user.Username,
                email = user.Email,
                password = user.Password,
                profileImg = user.ProfileImg,
                status = user.Status,
                role = user.Role.ToString(),
                country = user.Country,
                city = user.City,
                description = user.Description,
                phoneNumber = user.PhoneNumber,
                service = user.Service?.Name
            };
        }
    }
}

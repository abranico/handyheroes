using Domain.Entities;
using Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Models
{
    public class ReviewUserDto
    {
        public int id { get; init; }
        public string username { get; init; }
        public string firstName { get; init; }
        public string? lastName { get; init; }
        public string? profileImg { get; init; }
        public bool status { get; init; }

        public static ReviewUserDto FromEntity(User user)
        {
            return new ReviewUserDto
            {
                id = user.Id,
                firstName = user.FirstName,
                lastName = user.LastName,
                username = user.Username,
                profileImg = user.ProfileImg,
                status = user.Status,
            };
        }
    }
}

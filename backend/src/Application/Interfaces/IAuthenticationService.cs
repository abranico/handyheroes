using Application.Models.Requests;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Interfaces
{
    public interface IAuthenticationService
    {
        Task<string> Authenticate(AuthenticationRequest request);
        Task<string> RefreshToken(string refreshToken);
        Task Logout(int userId);
    }
}

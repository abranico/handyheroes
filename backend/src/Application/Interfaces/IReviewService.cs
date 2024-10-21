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
    public interface IReviewService
    {
        Task<List<ReviewDto>> GetAll();
        Task<ReviewDto> Create(ReviewCreateRequest request);
        Task Delete(int id);        
    }
}

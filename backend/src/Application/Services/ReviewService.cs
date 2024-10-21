using Application.Interfaces;
using Application.Models;
using Application.Models.Requests;
using Domain.Entities;
using Domain.Exceptions;
using Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services
{
    public class ReviewService : IReviewService
    {
        private readonly IReviewRepository _reviewRepository;
        private readonly IUserRepository _userRepository;

        public ReviewService(IReviewRepository reviewRepository, IUserRepository userRepository)
        {
            _reviewRepository = reviewRepository;
            _userRepository = userRepository;
        }

        public async Task<List<ReviewDto>> GetAll()
        {
            var reviews = await _reviewRepository.GetAll();
            return reviews.Select(ReviewDto.FromEntity).ToList();
        }

        public async Task<ReviewDto> Create(ReviewCreateRequest request)
        {
            var client = await _userRepository.GetById(request.clientId) ?? throw new NotFoundException("client not found");
            var professional = await _userRepository.GetById(request.professionalId) ?? throw new NotFoundException("professional not found");

            var review = new Review
            {
                Client = client,
                Professional = professional,
                Content = request.content,
                Date = request.date,
                Rating = request.rating
            };

            return  ReviewDto.FromEntity(await _reviewRepository.Create(review));
        }

        public async Task Delete(int id)
        {
            var review = await _reviewRepository.GetById(id) ?? throw new NotFoundException("review not found");
            await _reviewRepository.Delete(review);
        }
    }
}

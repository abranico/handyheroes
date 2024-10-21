using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Models
{
    public class ReviewDto
    {
        public int id { get; init; }
        public ReviewUserDto client { get; init; }
        public ReviewUserDto professional { get; init; }
        public string content { get; init; }
        public string date { get; init; }
        public int rating { get; init; }

        public static ReviewDto FromEntity(Review review)
        {
            return new ReviewDto
            {
                id = review.Id,
                client = ReviewUserDto.FromEntity(review.Client),
                professional = ReviewUserDto.FromEntity(review.Professional),
                content = review.Content,
                date = review.Date.ToString("dd 'de' MMMM 'de' yyyy", new CultureInfo("es-ES")),
                rating = review.Rating
            };
        }
    }
}

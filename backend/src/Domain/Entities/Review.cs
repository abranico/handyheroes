using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Review
    {
        public int Id { get; set; }
        public User Client { get; set; }
        public User Professional { get; set; }
        public string Content { get; set; }
        public DateTime Date { get; set; }
        public int Rating { get; set; }
    }
}

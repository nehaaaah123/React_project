using System.ComponentModel.DataAnnotations;

namespace Ecommerce.Api.Models
{
    public class Product 
    {
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string Name { get; set; }

        [StringLength(500)]
        public string Description { get; set; }

        [Required]
        [Range(1, 1000000)] 
        public decimal Price { get; set; }

        [Url]
        public string ImageUrl { get; set; }
    }
}

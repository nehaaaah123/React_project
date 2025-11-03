using Microsoft.EntityFrameworkCore;
using Ecommerce.Api.Models;

namespace Ecommerce.Api.Data
{
    public class ApplicationDbContext : DbContext
    { 
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; } = null!;
    }
}
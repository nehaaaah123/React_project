using System.Linq;
using Ecommerce.Api.Models;

namespace Ecommerce.Api.Data
{
    public static class DbInitializer
    {
        public static void Initialize(ApplicationDbContext context)
        {
            context.Database.EnsureCreated();

            if (context.Products.Any())
            {
                return; 
            }

            var products = new Product[]
            {
                new Product { Name = "Gaming Laptop", Description = "High-performance gaming laptop with RTX 3080", Price = 1499.99m, ImageUrl = "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&h=600" },
                new Product { Name = "Wireless Headphones", Description = "Noise-canceling Bluetooth headphones", Price = 199.97m, ImageUrl = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600" },
                new Product { Name = "4K Monitor", Description = "27-inch 4K gaming monitor with HDR", Price = 499.99m, ImageUrl = "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=800&h=600" },
                new Product { Name = "Gaming Mouse", Description = "High-DPI RGB gaming mouse", Price = 77.99m, ImageUrl = "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&h=600" },
                new Product { Name = "Smartphone", Description = "Latest flagship smartphone with 5G capability", Price = 999.99m, ImageUrl = "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&h=600" },
                new Product { Name = "Tablet", Description = "10.9-inch Retina display tablet with M1 chip", Price = 799.99m, ImageUrl = "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&h=600" },
                new Product { Name = "Smartwatch", Description = "Fitness tracking smartwatch with heart rate monitor", Price = 299.99m, ImageUrl = "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&h=600" },
                new Product { Name = "Bluetooth Speaker", Description = "Portable waterproof Bluetooth speaker", Price = 149.99m, ImageUrl = "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&h=600" },
                new Product { Name = "Webcam", Description = "4K HD webcam with built-in microphone", Price = 89.99m, ImageUrl = "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?w=800&h=600" },
                new Product { Name = "External SSD", Description = "1TB portable SSD with USB-C", Price = 179.99m, ImageUrl = "https://images.unsplash.com/photo-1628557044797-f21a177c37ec?w=800&h=600" },
                new Product { Name = "Wireless Charger", Description = "Fast wireless charging pad with LED indicator", Price = 39.99m, ImageUrl = "https://images.unsplash.com/photo-1622043396654-c3b70fa13080?w=800&h=600" },
                new Product { Name = "Gaming Console", Description = "Next-gen gaming console with 4K capabilities", Price = 499.99m, ImageUrl = "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800&h=600" },
                new Product { Name = "Camera", Description = "Mirrorless digital camera with 4K video", Price = 899.99m, ImageUrl = "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?w=800&h=600" },
                new Product { Name = "Smart Home Hub", Description = "Voice-controlled smart home assistant", Price = 129.99m, ImageUrl = "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600" }
            };

            context.Products.AddRange(products);
            context.SaveChanges();
        }
    }
}
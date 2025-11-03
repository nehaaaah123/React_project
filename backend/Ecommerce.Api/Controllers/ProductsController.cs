using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Ecommerce.Api.Models;
using Ecommerce.Api.Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Ecommerce.Api.Controllers
{
    [Route("api/products")]
    [ApiController]
    [EnableCors("AllowReactApp")]
    public class ProductsController : ControllerBase
    {
        private readonly ProductRepository _productRepository;
        private readonly ILogger<ProductsController> _logger;

        public ProductsController(ProductRepository productRepository, ILogger<ProductsController> logger)
        {
            _productRepository = productRepository;
            _logger = logger;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        {
            try
            {
                _logger.LogInformation("Fetching all products");
                var products = await _productRepository.GetAll();
                _logger.LogInformation($"Retrieved {products.Count} products");
                return Ok(products);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while fetching products");
                return StatusCode(500, "Internal server error while fetching products");
            }
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProductById(int id)
        {
            var product = await _productRepository.GetById(id);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product); 
        }

        [HttpPost]
        public async Task<ActionResult<Product>> CreateProduct(Product product)
        {
            await _productRepository.Add(product);
            return CreatedAtAction(nameof(GetProductById), new { id = product.Id }, product);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProduct(int id, Product product)
        {
            if (id != product.Id)
            {
                return BadRequest(); 
            }

            await _productRepository.Update(product);
            return NoContent(); 
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var product = await _productRepository.GetById(id);
            if (product == null)
            {
                return NotFound(); 
            }

            await _productRepository.Delete(id);
            return NoContent(); 
        }
    }
}

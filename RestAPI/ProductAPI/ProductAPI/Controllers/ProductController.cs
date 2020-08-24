using ProductAPI.Authentication;
using ProductAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ProductAPI.Controllers
{
    public class ProductController : ApiController
    {
        static List<Product> products = new List<Product>
        {
            new Product { ID = 1, Name = "Tomato Soup", Description = "Groceries", Price = 1, Qty=1 },
            new Product { ID = 2, Name = "Yo-yo", Description = "Toys", Price = 3.75M, Qty=5 },
            new Product { ID = 3, Name = "Hammer", Description = "Hardware", Price = 16.99M, Qty=9 }
        };

        public ProductController()
        {

        }

        [HttpGet]
        [Route("Products")]
        public List<Product> Products()
        {
            return products;
        }

        [HttpGet]
        [Route("Product/{productId}")]
        public Product Product(int productId)
        {
            return products.FirstOrDefault(prd=> prd.ID == productId);
        }
    }
}

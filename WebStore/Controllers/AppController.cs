using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebStore.ViewModels;

namespace WebStore.Controllers
{
    public class AppController:Controller
    {
        public IActionResult Index()
        {
            //throw new InvalidOperationException();
            return View();
        }
        [HttpGet("contact")]
        public IActionResult Contact()
        {
            //ViewBag.Title = "Contact Us";
            return View();
        }
        [HttpPost("contact")]
        public IActionResult Contact(ContactViewModel model)
        {
            //ViewBag.Title = "Contact Us";
            return View();
        }

        public IActionResult About()
        {
            ViewBag.Title = "About Us";
            return View();
        }
    }
}

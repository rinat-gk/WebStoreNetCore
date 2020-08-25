using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebStore.Controllers
{
    public class AppController:Controller
    {
        public IActionResult Index()
        {
            //throw new InvalidOperationException();
            return View();
        }
    }
}

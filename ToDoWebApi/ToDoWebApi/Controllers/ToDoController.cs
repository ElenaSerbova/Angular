using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ToDoWebApi.Models;

namespace ToDoWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToDoController : Controller
    {
        private readonly ToDoContext _context;

        public ToDoController(ToDoContext context)
        {
            _context = context;

            if (_context.ToDoItems.Count() == 0)
            {
                _context.ToDoItems.Add(new ToDoItem { Name = "Call Katya", IsCompleted = true });
                _context.ToDoItems.Add(new ToDoItem { Name = "Walk with dog", IsCompleted = false });
                _context.ToDoItems.Add(new ToDoItem { Name = "Feed the cat", IsCompleted = false });
                _context.SaveChanges();
            }
        }

        // GET: ToDo

        public async Task<IActionResult> Index()
        {
            return Json(await _context.ToDoItems.ToListAsync());
        }

        // GET: ToDo/Details/5
        [Route("Details/{id}")]
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var toDoItem = await _context.ToDoItems
                .FirstOrDefaultAsync(m => m.Id == id);
            if (toDoItem == null)
            {
                return NotFound();
            }

            return Json(toDoItem);
        }

        [HttpPut("Edit/{id}")]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Name,IsComplete")] ToDoItem toDoItem)
        {
            if (id != toDoItem.Id)
            {
                return NotFound();
            }

            try
            {
                _context.Update(toDoItem);
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ToDoItemExists(toDoItem.Id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Json(toDoItem);
        }

        private bool ToDoItemExists(int id)
        {
            return _context.ToDoItems.Any(e => e.Id == id);
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using milkApi.Data;
using milkApi.Models;

namespace milkApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MilkController : ControllerBase
    {
        private readonly milkApiContext _context;

        public MilkController(milkApiContext context)
        {
            _context = context;
        }

        // GET: api/Milk
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Milk>>> GetMilk()
        {
            return await _context.Milk.ToListAsync();
        }

        // GET: api/Milk/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Milk>> GetMilk(Guid id)
        {
            var milk = await _context.Milk.FindAsync(id);

            if (milk == null)
            {
                return NotFound();
            }

            return milk;
        }

        // PUT: api/Milk/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMilk(Guid id, Milk milk)
        {
            if (id != milk.Id)
            {
                return BadRequest();
            }

            _context.Entry(milk).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MilkExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Milk
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Milk>> PostMilk(Milk milk)
        {
            _context.Milk.Add(milk);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMilk", new { id = milk.Id }, milk);
        }

        // DELETE: api/Milk/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMilk(Guid id)
        {
            var milk = await _context.Milk.FindAsync(id);
            if (milk == null)
            {
                return NotFound();
            }

            _context.Milk.Remove(milk);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MilkExists(Guid id)
        {
            return _context.Milk.Any(e => e.Id == id);
        }
    }
}

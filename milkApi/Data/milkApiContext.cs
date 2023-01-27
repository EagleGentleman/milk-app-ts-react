using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using milkApi.Models;

namespace milkApi.Data
{
    public class milkApiContext : DbContext
    {
        public milkApiContext (DbContextOptions<milkApiContext> options)
            : base(options)
        {
        }

        public DbSet<milkApi.Models.Milk> Milk { get; set; } = default!;
    }
}

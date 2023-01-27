namespace milkApi.Models
{
    public class Milk
    {
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public string? Type { get; set; } = null;
        public int Storage { get; set; }


    }
}

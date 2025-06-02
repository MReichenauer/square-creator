using System.ComponentModel.DataAnnotations;

namespace api.Dtos
{
    public class SquareDto
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "X is required and must be an integer.")]
        public double? X { get; set; }
        [Required(ErrorMessage = "Y is required and must be an integer.")]
        public double? Y { get; set; }
        [Required]
        [RegularExpression(@"^#([A-Fa-f0-9]{6})$", ErrorMessage = "Color must be a valid hex code.")]
        public required string Color { get; set; }

    }
}
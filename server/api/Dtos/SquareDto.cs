using System.ComponentModel.DataAnnotations;

namespace api.Dtos
{
    public class SquareDto
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "x is required and must be an integer.")]
        public double? X { get; set; }
        [Required(ErrorMessage = "y is required and must be an integer.")]
        public double? Y { get; set; }
        [Required]
        [RegularExpression(@"^#([A-Fa-f0-9]{6})$", ErrorMessage = "color must be a valid hex code.")]
        public required string Color { get; set; }

    }
}
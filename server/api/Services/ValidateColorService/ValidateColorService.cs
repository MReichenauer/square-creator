using api.utils;

namespace api.Services.ValidateColorService
{
    public class ValidateColorService : IValidateColorService
    {
        public void ValidateColor(string color, string? forbidenColor)
        {
            ArgumentNullException.ThrowIfNull(color);

            if (color.Equals(forbidenColor, StringComparison.OrdinalIgnoreCase))
            {
                throw new InvalidOperationException($"Invalid color: {color} the color cannot be the same as the previous square.");
            }

            if (!IsValidHexCode.Test(color))
            {
                throw new InvalidOperationException($"Invalid color format: {color} the color must be a valid hex code.");
            }

        }
    }
}
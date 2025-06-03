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

        }
    }
}
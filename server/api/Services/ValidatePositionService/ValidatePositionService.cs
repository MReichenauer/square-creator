namespace api.Services.ValidatePositionService
{
    public class ValidatePositionService : IValidatePositionService
    {
        public void ValidatePosition(int? x, int? y)
        {

            if (!x.HasValue)
            {
                throw new InvalidOperationException($"Invalid value for X: {x} the value of X must be an integer.");
            }

            if (!y.HasValue)
            {
                throw new InvalidOperationException($"Invalid value for Y: {y} the value of Y must be an integer.");
            }
        }
    }
}

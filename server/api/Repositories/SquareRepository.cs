using System.Text.Json;
using api.models;

namespace api.repositories
{
    public class SquareRepository : ISquareRepository
    {
        private readonly string _squaresDataFilePath;
        private readonly string _lastSquareDataFilePath;
        private readonly JsonSerializerOptions _jsonSerializerOptions = new() { WriteIndented = false };

        public SquareRepository(IWebHostEnvironment environment)
        {
            var dataDirectory = Path.Combine(environment.ContentRootPath, "Data");
            _squaresDataFilePath = Path.Combine(dataDirectory, "SquareData.json");
            _lastSquareDataFilePath = Path.Combine(dataDirectory, "LastSquareData.json");
        }

        public IEnumerable<Square> GetAll()
        {
            List<Square> storedSquares = [];
            storedSquares = [.. File.ReadLines(_squaresDataFilePath)
           .Where(line => !string.IsNullOrWhiteSpace(line))
           .Select(line => JsonSerializer.Deserialize<Square>(line))];
            return storedSquares;
        }

        public void Insert(Square square)
        {
            Square? lastStoredSquare = null;
            string data = File.ReadAllText(_lastSquareDataFilePath);
            if (data != null)
            {
                lastStoredSquare = JsonSerializer.Deserialize<Square>(data);

            }
            int id = 1;
            if (lastStoredSquare != null)

            {
                id = lastStoredSquare.Id + 1;
                if (lastStoredSquare != null && lastStoredSquare.Color != null)
                {
                    if (square.Color.Equals(lastStoredSquare.Color, StringComparison.OrdinalIgnoreCase))
                    {
                        throw new InvalidOperationException($"Invalid color: {square.Color} the color cannot be the same as the previous square.");
                    }
                }
            }
            square.Id = id;
            string squareJson = JsonSerializer.Serialize(square, _jsonSerializerOptions);
            try
            {
                File.AppendAllText(_squaresDataFilePath, Environment.NewLine + squareJson);
                File.WriteAllText(_lastSquareDataFilePath, squareJson);
            }
            catch (Exception ex)
            {
                throw new Exception($"Failed to write square data to file: {ex.Message}");
            }
        }
    }
}

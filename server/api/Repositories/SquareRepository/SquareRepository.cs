using api.Dtos;
using api.Models;
using api.Services.GenerateSquareIdService;
using api.Services.JsonDataService;
using api.Services.ValidateColorService;

namespace api.Repositories.SquareRepository
{
    public class SquareRepository : ISquareRepository
    {
        private readonly string _squaresDataFilePath;
        private readonly string _lastSquareDataFilePath;
        private readonly IJsonDataService _jsonDataService;
        private readonly IGenerateSquareIdService<Square> _generateSquareIdService;
        private readonly IValidateColorService _validateColorService;

        public SquareRepository(IWebHostEnvironment environment, IJsonDataService jsonDataService, IGenerateSquareIdService<Square> generateSquareIdService, IValidateColorService validateColorService)
        {
            string dataDirectory = Path.Combine(environment.ContentRootPath, "Data");
            _squaresDataFilePath = Path.Combine(dataDirectory, "SquareData.json");
            _lastSquareDataFilePath = Path.Combine(dataDirectory, "LastSquareData.json");
            _jsonDataService = jsonDataService;
            _generateSquareIdService = generateSquareIdService;
            _validateColorService = validateColorService;
        }

        public async Task<IEnumerable<Square>> GetAllAsync()
        {
            return await _jsonDataService.ReadObjectsInArrayAsync<Square>(_squaresDataFilePath);
        }

        public async Task<Square> InsertAsync(SquareDto squareDto)
        {
            Square? lastSquare = await _jsonDataService.ReadSingleObjectAsync<Square>(_lastSquareDataFilePath);
            _validateColorService.ValidateColor(squareDto.Color, lastSquare?.Color ?? string.Empty);
            Square newSquare = new()
            {
                Id = _generateSquareIdService.GenerateId(lastSquare),
                Color = squareDto.Color,
                X = squareDto.X ?? 0,
                Y = squareDto.Y ?? 0
            };
            await _jsonDataService.AppendObjectAsync(_squaresDataFilePath, newSquare);
            await _jsonDataService.OverwriteObjectAsync(_lastSquareDataFilePath, newSquare);
            return newSquare;
        }
    }
}

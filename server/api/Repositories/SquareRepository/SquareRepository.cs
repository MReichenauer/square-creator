using api.Dtos;
using api.models;
using api.Services.GenerateSquareIdService;
using api.Services.JsonDataService;
using api.Services.ValidateColorService;

namespace api.repositories.SquareRepository
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

        public IEnumerable<Square> GetAll()
        {
            return _jsonDataService.ReadObjectsInArray<Square>(_squaresDataFilePath);
        }

        public void Insert(SquareDto square)
        {
            Square? lastSquare = _jsonDataService
               .ReadSingleObject<Square>(_lastSquareDataFilePath);

            square.Id = _generateSquareIdService.GenerateId(lastSquare);
            _validateColorService.ValidateColor(square.Color, lastSquare?.Color ?? string.Empty);
            _jsonDataService.AppendObject(_squaresDataFilePath, square);
            _jsonDataService.OweriteObject(_lastSquareDataFilePath, square);

        }
    }
}

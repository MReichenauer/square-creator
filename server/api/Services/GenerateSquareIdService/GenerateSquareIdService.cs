using api.models;

namespace api.Services.GenerateSquareIdService
{
    public class GenerateSquareIdService : IGenerateSquareIdService<Square>
    {
        public int GenerateId(Square? lastItem)
        {
            return lastItem is null ? 1 : lastItem.Id + 1;
        }

    }

}
using api.Dtos;
using api.models;

namespace api.repositories.SquareRepository
{
    public interface ISquareRepository
    {
        Task<IEnumerable<Square>> GetAllAsync();
        Task<Square> InsertAsync(SquareDto square);
    }
}
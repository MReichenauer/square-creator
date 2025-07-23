using api.Dtos;
using api.Models;

namespace api.Repositories.SquareRepository
{
    public interface ISquareRepository
    {
        Task<IEnumerable<Square>> GetAllAsync();
        Task<Square> InsertAsync(SquareDto square);
    }
}
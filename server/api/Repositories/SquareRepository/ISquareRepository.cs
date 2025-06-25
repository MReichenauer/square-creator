
using api.Dtos;
using api.models;

namespace api.repositories.SquareRepository
{
    public interface ISquareRepository
    {
        IEnumerable<Square> GetAll();
        void Insert(SquareDto square);
    }
}
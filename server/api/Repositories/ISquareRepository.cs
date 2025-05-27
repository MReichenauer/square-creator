
using api.models;

namespace api.repositories
{
    public interface ISquareRepository
    {
        IEnumerable<Square> GetAll();
        void Insert(Square square);
    }
}
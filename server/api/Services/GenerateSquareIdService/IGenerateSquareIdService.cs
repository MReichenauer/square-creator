namespace api.Services.GenerateSquareIdService
{
    public interface IGenerateSquareIdService<T>
    {
        int GenerateId(T? lastItem);
    }
}
namespace api.Services.JsonDataService
{
    public interface IJsonDataService
    {
        Task<IEnumerable<T>> ReadObjectsInArrayAsync<T>(string filePath);
        Task<T?> ReadSingleObjectAsync<T>(string filePath);
        Task AppendObjectAsync<T>(string filePath, T obj);
        Task OverwriteObjectAsync<T>(string filePath, T obj);
    }
}
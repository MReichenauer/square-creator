using System.Text.Json;

namespace api.Services.JsonDataService
{
    public interface IJsonDataService
    {
        IEnumerable<T> ReadObjects<T>(string filePath, JsonSerializerOptions options);
        void AppendObject<T>(string filePath, T obj, JsonSerializerOptions options);
        void OweriteObject<T>(string filePath, T obj, JsonSerializerOptions options);
    }
}
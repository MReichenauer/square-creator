namespace api.Services.JsonDataService
{
    public interface IJsonDataService
    {
        IEnumerable<T> ReadObjectsInArray<T>(string filePath);
        T? ReadSingleObject<T>(string filePath);
        void AppendObject<T>(string filePath, T obj);
        void OweriteObject<T>(string filePath, T obj);
    }
}
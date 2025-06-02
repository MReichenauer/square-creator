using System.Text.Json;
using api.utils;

namespace api.Services.JsonDataService;

public class JsonDataService : IJsonDataService
{
    private readonly JsonSerializerOptions _options = NewJsonSerializerOptions.s_indented;
    public IEnumerable<T> ReadObjectsInArray<T>(string filePath)
    {
        EnsureDirectoryExists(filePath);
        if (!File.Exists(filePath))
            return [];

        string storedArrayData = File.ReadAllText(filePath);
        return string.IsNullOrWhiteSpace(storedArrayData)
            ? []
            : JsonSerializer.Deserialize<List<T>>(storedArrayData, _options) ?? [];
    }
    public T? ReadSingleObject<T>(string filePath)
    {
        EnsureDirectoryExists(filePath);
        if (!File.Exists(filePath))
            return default;

        string storedObjectData = File.ReadAllText(filePath);
        return string.IsNullOrWhiteSpace(storedObjectData)
            ? default
            : JsonSerializer.Deserialize<T>(storedObjectData, _options);
    }

    public void AppendObject<T>(string filePath, T obj)
    {
        EnsureDirectoryExists(filePath);
        List<T> storedArrayData = [.. ReadObjectsInArray<T>(filePath)];
        storedArrayData.Add(obj);
        string updatedArrayData = JsonSerializer.Serialize(storedArrayData, _options);
        File.WriteAllText(filePath, updatedArrayData);
        Console.WriteLine(updatedArrayData);
    }

    public void OweriteObject<T>(string filePath, T obj)
    {
        EnsureDirectoryExists(filePath);
        string newObjectData = JsonSerializer.Serialize(obj, _options);
        File.WriteAllText(filePath, newObjectData);
    }

    private static void EnsureDirectoryExists(string filePath)
    {
        string? directory = Path.GetDirectoryName(filePath);
        if (!string.IsNullOrEmpty(directory) && !Directory.Exists(directory))
            Directory.CreateDirectory(directory);
    }
}

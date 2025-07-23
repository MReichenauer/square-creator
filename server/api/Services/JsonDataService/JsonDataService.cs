using System.Text.Json;
using api.Utils;

namespace api.Services.JsonDataService;

public class JsonDataService : IJsonDataService
{
    private readonly JsonSerializerOptions _options = NewJsonSerializerOptions.s_indented;
    public async Task<IEnumerable<T>> ReadObjectsInArrayAsync<T>(string filePath)
    {
        EnsureDirectoryExists(filePath);
        if (!File.Exists(filePath))
            return [];

        string storedArrayData = await File.ReadAllTextAsync(filePath);
        return string.IsNullOrWhiteSpace(storedArrayData)
            ? []
            : JsonSerializer.Deserialize<List<T>>(storedArrayData, _options) ?? [];
    }
    public async Task<T?> ReadSingleObjectAsync<T>(string filePath)
    {
        EnsureDirectoryExists(filePath);
        if (!File.Exists(filePath))
            return default;

        string storedObjectData = await File.ReadAllTextAsync(filePath);
        return string.IsNullOrWhiteSpace(storedObjectData)
            ? default
            : JsonSerializer.Deserialize<T>(storedObjectData, _options);
    }

    public async Task AppendObjectAsync<T>(string filePath, T obj)
    {
        EnsureDirectoryExists(filePath);
        List<T> storedArrayData = [.. await ReadObjectsInArrayAsync<T>(filePath)];
        storedArrayData.Add(obj);
        string updatedArrayData = JsonSerializer.Serialize(storedArrayData, _options);
        await File.WriteAllTextAsync(filePath, updatedArrayData);
    }

    public async Task OverwriteObjectAsync<T>(string filePath, T obj)
    {
        EnsureDirectoryExists(filePath);
        string newObjectData = JsonSerializer.Serialize(obj, _options);
        await File.WriteAllTextAsync(filePath, newObjectData);
    }

    private static void EnsureDirectoryExists(string filePath)
    {
        string? directory = Path.GetDirectoryName(filePath);
        if (!string.IsNullOrEmpty(directory) && !Directory.Exists(directory))
            Directory.CreateDirectory(directory);
    }
}

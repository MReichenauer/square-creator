using System.Text.Json;

namespace api.Services.JsonDataService;

public class JsonDataService : IJsonDataService
{
    public IEnumerable<T> ReadObjects<T>(string filePath, JsonSerializerOptions options)
    {
        if (!File.Exists(filePath))
            return [];

        return [.. File.ReadLines(filePath)
                       .Where(line => !string.IsNullOrWhiteSpace(line))
                       .Select(line => JsonSerializer.Deserialize<T>(line, options)!)];
    }

    public void AppendObject<T>(string filePath, T obj, JsonSerializerOptions options)
    {
        EnsureDirectoryExists(filePath);
        var json = JsonSerializer.Serialize(obj, options);
        File.AppendAllText(filePath, json + Environment.NewLine);
    }

    public void OweriteObject<T>(string filePath, T obj, JsonSerializerOptions options)
    {
        EnsureDirectoryExists(filePath);
        var json = JsonSerializer.Serialize(obj, options);
        File.WriteAllText(filePath, json);
    }

    private static void EnsureDirectoryExists(string filePath)
    {
        var dir = Path.GetDirectoryName(filePath);
        if (!string.IsNullOrEmpty(dir) && !Directory.Exists(dir))
            Directory.CreateDirectory(dir);
    }
}

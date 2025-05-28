using System.Text.Json;

namespace api.Services.JsonDataService;

public class JsonDataService : IJsonDataService
{
    public IEnumerable<T> ReadObjectsInArray<T>(string filePath, JsonSerializerOptions options)
    {
        EnsureDirectoryExists(filePath);
        if (!File.Exists(filePath))
            return [];

        string storedSquares = File.ReadAllText(filePath);
        return string.IsNullOrWhiteSpace(storedSquares)
            ? []
            : JsonSerializer.Deserialize<List<T>>(storedSquares, options) ?? [];
    }
    public T? ReadSingleObject<T>(string filePath, JsonSerializerOptions options)
    {
        EnsureDirectoryExists(filePath);
        if (!File.Exists(filePath))
            return default;

        string previouslyStoredSquare = File.ReadAllText(filePath);
        return string.IsNullOrWhiteSpace(previouslyStoredSquare)
            ? default
            : JsonSerializer.Deserialize<T>(previouslyStoredSquare, options);
    }

    public void AppendObject<T>(string filePath, T obj, JsonSerializerOptions options)
    {
        EnsureDirectoryExists(filePath);
        string newSquare = JsonSerializer.Serialize(obj, options);
        using FileStream stream = new(
              filePath,
              FileMode.OpenOrCreate,
              FileAccess.ReadWrite,
              FileShare.None);
        Console.WriteLine($"SquareDataFile length: {stream.Length}");
        using StreamWriter writer = new(stream);

        if (stream.Length == 0)
        {
            writer.Write($"[{newSquare}]");
        }
        else
        {
            stream.Seek(-1, SeekOrigin.End);
            writer.Write($"{Environment.NewLine},{newSquare}]");
        }
    }

    public void OweriteObject<T>(string filePath, T obj, JsonSerializerOptions options)
    {
        EnsureDirectoryExists(filePath);
        string newSquare = JsonSerializer.Serialize(obj, options);
        File.WriteAllText(filePath, newSquare);
    }

    private static void EnsureDirectoryExists(string filePath)
    {
        string? directory = Path.GetDirectoryName(filePath);
        if (!string.IsNullOrEmpty(directory) && !Directory.Exists(directory))
            Directory.CreateDirectory(directory);
    }
}

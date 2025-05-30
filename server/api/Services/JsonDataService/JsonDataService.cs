using System.Text.Json;

namespace api.Services.JsonDataService;

public class JsonDataService : IJsonDataService
{
    private readonly JsonSerializerOptions _options = new() { WriteIndented = true };

    public IEnumerable<T> ReadObjectsInArray<T>(string filePath)
    {
        EnsureDirectoryExists(filePath);
        if (!File.Exists(filePath))
            return [];

        string storedSquares = File.ReadAllText(filePath);
        return string.IsNullOrWhiteSpace(storedSquares)
            ? []
            : JsonSerializer.Deserialize<List<T>>(storedSquares, _options) ?? [];
    }
    public T? ReadSingleObject<T>(string filePath)
    {
        EnsureDirectoryExists(filePath);
        if (!File.Exists(filePath))
            return default;

        string previouslyStoredSquare = File.ReadAllText(filePath);
        return string.IsNullOrWhiteSpace(previouslyStoredSquare)
            ? default
            : JsonSerializer.Deserialize<T>(previouslyStoredSquare, _options);
    }

    public void AppendObject<T>(string filePath, T obj)
    {
        EnsureDirectoryExists(filePath);
        List<T> exsistingSquaresData = [.. ReadObjectsInArray<T>(filePath)];
        exsistingSquaresData.Add(obj);
        string updatedSquaresData = JsonSerializer.Serialize(exsistingSquaresData, _options);
        File.WriteAllText(filePath, updatedSquaresData);
        Console.WriteLine(updatedSquaresData);
    }

    public void OweriteObject<T>(string filePath, T obj)
    {
        EnsureDirectoryExists(filePath);
        string newSquare = JsonSerializer.Serialize(obj, _options);
        File.WriteAllText(filePath, newSquare);
    }

    private static void EnsureDirectoryExists(string filePath)
    {
        string? directory = Path.GetDirectoryName(filePath);
        if (!string.IsNullOrEmpty(directory) && !Directory.Exists(directory))
            Directory.CreateDirectory(directory);
    }
}

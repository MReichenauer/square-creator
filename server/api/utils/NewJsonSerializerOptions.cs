using System.Text.Json;

namespace api.utils
{
    public class NewJsonSerializerOptions
    {
        public static readonly JsonSerializerOptions s_indented = new() { WriteIndented = true };
    }
}
using System.Text.RegularExpressions;

namespace api.utils
{
    public static partial class IsValidHexCode
    {
        public static bool Test(string hc)
        {

            return MyRegex().IsMatch(hc);
        }

        [GeneratedRegex(@"^#([0-9A-Fa-f]{6})$")]
        private static partial Regex MyRegex();
    }
}


using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Services.ValidateColorService
{
    public interface IValidateColorService
    {
        void ValidateColor(string color, string forbidenColor);
    }
}
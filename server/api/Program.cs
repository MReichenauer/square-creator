using Scalar.AspNetCore;
using api.Services.JsonDataService;
using api.Services.GenerateSquareIdService;
using api.Services.ValidateColorService;
using api.models;
using api.repositories.SquareRepository;

var builder = WebApplication.CreateBuilder(args);
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy =>
                      {
                          policy.WithOrigins("http://localhost:5173")
                          .WithMethods("GET", "POST")
                          .AllowAnyHeader();
                      });
});

builder.Services.AddOpenApi();
builder.Services.AddControllers();
builder.Services.AddSingleton<IJsonDataService, JsonDataService>();
builder.Services.AddSingleton<IGenerateSquareIdService<Square>, GenerateSquareIdService>();
builder.Services.AddSingleton<IValidateColorService, ValidateColorService>();
builder.Services.AddSingleton<ISquareRepository, SquareRepository>();

var app = builder.Build();



app.MapOpenApi();
app.MapScalarApiReference(); // To view the API documentation with scalar, run the .net application and enter http://localhost:5247/scalar/


app.UseHttpsRedirection();
app.UseCors(MyAllowSpecificOrigins);
app.MapControllers();
app.Run();

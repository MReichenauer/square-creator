using api.repositories;
using Scalar.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();
builder.Services.AddControllers();
builder.Services.AddSingleton<ISquareRepository, SquareRepository>();


var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.MapScalarApiReference(); // To view the API documentation with scalar, run the .net application and enter http://localhost:5247/scalar/
}

app.UseHttpsRedirection();
app.MapControllers();
app.Run();

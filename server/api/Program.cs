using Scalar.AspNetCore;
using api.Services.JsonDataService;
using api.Services.GenerateSquareIdService;
using api.Services.ValidateColorService;
using api.models;
using api.repositories.SquareRepository;
using api.Hubs;
using api.Services.SignalRService;
using api.Services.SignalRService.utils.BroadcastQueue;

var builder = WebApplication.CreateBuilder(args);

var allowedCorsOrigin = Environment.GetEnvironmentVariable("CLIENT_PRODUCTION_URL") ?? "http://localhost:5173";

builder.Services.AddCors(options =>
{
    options.AddPolicy("corsOriginConfig",
                      policy =>
                      {
                          policy.WithOrigins(allowedCorsOrigin)
                          .WithMethods("GET", "POST")
                          .AllowAnyHeader()
                          .AllowCredentials();
                      });
});
builder.Services.AddSignalR();
builder.Services.AddOpenApi();
builder.Services.AddControllers();
builder.Services.AddSingleton<ISignalRService, SignalRService>();
builder.Services.AddSingleton<IJsonDataService, JsonDataService>();
builder.Services.AddSingleton<IGenerateSquareIdService<Square>, GenerateSquareIdService>();
builder.Services.AddSingleton<IValidateColorService, ValidateColorService>();
builder.Services.AddSingleton<ISquareRepository, SquareRepository>();
builder.Services.AddSingleton<IBroadcastQueue, BroadcastQueue>();

var app = builder.Build();



app.MapOpenApi();
app.MapScalarApiReference(); // To view the API documentation with scalar, run the .net application and enter http://localhost:5247/scalar/


app.UseHttpsRedirection();
app.UseCors("corsOriginConfig");
app.MapControllers();
app.MapHub<SignalRHub>("/api/signal-r-hub");
app.Run();

using Scalar.AspNetCore;
using api.Services.JsonDataService;
using api.Services.GenerateSquareIdService;
using api.Services.ValidateColorService;
using api.Models;
using api.Repositories.SquareRepository;
using api.Hubs;
using api.Services.SignalRService;
using api.Services.SignalRService.utils.BroadcastQueue;
using System.Text.Json;

WebApplicationBuilder builder = WebApplication.CreateBuilder(args);
string myAllowedSpecificOrigin = "_myAllowedSpecificOrigin";
string? allowedOrigin = builder.Configuration["CorsSettings:AllowedOrigin"];
if (!string.IsNullOrEmpty(allowedOrigin))
{
    builder.Services.AddCors(options =>
{
    options.AddPolicy(name: myAllowedSpecificOrigin,
                      policy =>
                      {
                          policy.WithOrigins(allowedOrigin)
                          .WithMethods("GET", "POST")
                          .AllowAnyHeader()
                          .AllowCredentials();
                      });
});
}
else
{
    Console.WriteLine("No allowed origin found in configuration. Make sure to configure 'CorsSettings: AllowedOrigin' with a valid origin in appsettings.");
}

builder.Services.AddSignalR();
builder.Services.AddOpenApi();
builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
        options.JsonSerializerOptions.DictionaryKeyPolicy = JsonNamingPolicy.CamelCase;
    });

builder.Services.AddSingleton<ISignalRService, SignalRService>();
builder.Services.AddSingleton<IJsonDataService, JsonDataService>();
builder.Services.AddSingleton<IGenerateSquareIdService<Square>, GenerateSquareIdService>();
builder.Services.AddSingleton<IValidateColorService, ValidateColorService>();
builder.Services.AddSingleton<ISquareRepository, SquareRepository>();
builder.Services.AddSingleton<IBroadcastQueue, BroadcastQueue>();

WebApplication? app = builder.Build();



app.MapOpenApi();
app.MapScalarApiReference(); // To view the API documentation with scalar, run the application and enter http://localhost:5000/scalar/
app.UseHttpsRedirection();
app.UseCors(myAllowedSpecificOrigin);
app.Use(async (context, next) =>
{
    string? secretKey = context.RequestServices.GetRequiredService<IConfiguration>()["AccessKey"];

    string? extractedKey = null;

    if (context.Request.Headers.TryGetValue("Authorization", out var authHeaderValues))
    {
        string? authHeader = authHeaderValues.FirstOrDefault();
        if (authHeader?.StartsWith("Bearer ") == true)
        {
            extractedKey = authHeader["Bearer ".Length..].Trim();
        }
    }

    else if (context.Request.Headers.TryGetValue("access-key", out var accessKeyHeader))
    {
        extractedKey = accessKeyHeader.FirstOrDefault();
    }

    else if (context.Request.Path.StartsWithSegments("/api/signal-r-hub"))
    {
        if (context.Request.Query.TryGetValue("access_token", out var accessToken))
        {
            extractedKey = accessToken;
        }
    }

    if (!string.IsNullOrEmpty(extractedKey) && extractedKey == secretKey)
    {
        await next.Invoke();
    }
    else
    {
        context.Response.StatusCode = 401;
        await context.Response.WriteAsync("Unauthorized: Access key is not valid.");
    }
});
app.MapControllers();
app.MapHub<SignalRHub>("/api/signal-r-hub");
app.Run();

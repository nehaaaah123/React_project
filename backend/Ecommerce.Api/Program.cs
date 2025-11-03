using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore;
using Ecommerce.Api.Data;
using Ecommerce.Api.Repositories;//here im connecting sql server

var builder = WebApplication.CreateBuilder(args); 

builder.Services.AddControllers();
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddScoped<ProductRepository>();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo
    {
        Title = "Ecommerce API",
        Version = "v1",
        Description = "API for the Ecommerce application"
    });
});
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policyBuilder =>
        {
             if (builder.Environment.IsDevelopment())
            {
                policyBuilder
                    .AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader();
            }
            else
            {
                policyBuilder
                    .WithOrigins("http://localhost:5173", "http://localhost:5174")
                    .AllowAnyMethod()
                    .AllowAnyHeader();
            }
        });
});

var app = builder.Build();
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    try
    {
        var context = services.GetRequiredService<ApplicationDbContext>();
        context.Database.EnsureDeleted();
        context.Database.EnsureCreated();
        DbInitializer.Initialize(context);
        
        var logger = services.GetRequiredService<ILogger<Program>>();
        logger.LogInformation("Database initialized successfully");
    }
    catch (Exception ex)
    {
        var logger = services.GetRequiredService<ILogger<Program>>();
        logger.LogError(ex, "An error occurred while initializing the database.");
        throw;
    }
}

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Ecommerce API V1");
        c.RoutePrefix = "swagger";
    });
}
else
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}
if (app.Environment.IsDevelopment())
{
    app.Use(async (context, next) =>
    {
        Console.WriteLine($"Incoming request: {context.Request.Method} {context.Request.Path}");
        await next();
        Console.WriteLine($"Response status: {context.Response.StatusCode}");
    });
}

if (!app.Environment.IsDevelopment()){
    app.UseHttpsRedirection();
}

app.UseRouting();
app.UseCors("AllowReactApp");
app.UseAuthorization();

app.MapControllers();

app.Run();
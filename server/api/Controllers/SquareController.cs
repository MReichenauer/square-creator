using api.Dtos;
using api.models;
using api.repositories.SquareRepository;
using Microsoft.AspNetCore.Mvc;

namespace api.controllers;

[ApiController]
[Route("api/[controller]")]
public class SquareController(ISquareRepository _squareRepository) : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Square>>> GetAll()
    {
        return Ok(await _squareRepository.GetAllAsync());
    }
    [HttpPost]
    public async Task<ActionResult> Insert([FromBody] SquareDto squareDto)
    {
        try
        {
            Square newSquare = await _squareRepository.InsertAsync(squareDto);
            return Created(string.Empty, newSquare);
        }
        catch (InvalidOperationException exception)
        {
            return Conflict(new { type = "Conflict", title = "This color is used by previous square", status = 409, errors = new { Color = new[] { exception.Message } } });

        }
    }

}


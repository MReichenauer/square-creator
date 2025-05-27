
using api.models;
using api.repositories;
using Microsoft.AspNetCore.Mvc;

namespace api.controllers;

[ApiController]
[Route("api/[controller]")]
public class SquareController(ISquareRepository squareRepository) : ControllerBase
{
    private readonly ISquareRepository _squareRepository = squareRepository;

    [HttpGet]
    public ActionResult<IEnumerable<Square>> GetAll()
    {
        var result = _squareRepository.GetAll();
        return Ok(result);
    }
    [HttpPost]
    public ActionResult Insert(Square square)
    {
        if (square == null)
        {
            return BadRequest("Square is cannot be null");
        }

        try
        {
            _squareRepository.Insert(square);
            return CreatedAtAction(nameof(GetAll), square);
        }
        catch (InvalidOperationException ex)
        {
            return Conflict(ex.Message);
        }

    }
}


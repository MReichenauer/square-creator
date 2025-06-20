
using api.Dtos;
using api.models;
using api.repositories.SquareRepository;
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
        IEnumerable<Square> result = _squareRepository.GetAll();
        return Ok(result);
    }
    [HttpPost]
    public ActionResult Insert(SquareDto square)
    {
        if (square == null)
        {
            return BadRequest("Square cannot be null.");
        }

        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        try
        {
            _squareRepository.Insert(square);
            return CreatedAtAction(nameof(GetAll), square);
        }
        catch (InvalidOperationException exception)
        {
            return Conflict(new { type = "Conflict", title = "This color is used by previous square", status = 409, errors = new { Color = new[] { exception.Message } } });

        }
    }
    [HttpGet("test-409")]
    public ActionResult Test409Error()
    {
        ModelState.AddModelError("Test conflict", "Model state test conflict.");
        return Conflict(new { type = "Conflict", title = "This color is used by previous square", status = 409, errors = ModelState });
    }
    [HttpGet("test-400")]
    public ActionResult Test400Error()
    {
        ModelState.AddModelError("Test badRequest", "Model state test badRequest.");
        return BadRequest(ModelState);
    }
}


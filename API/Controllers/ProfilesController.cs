namespace API.Controllers
{
    using Microsoft.AspNetCore.Mvc;

    public class ProfilesController : BaseApiController
    {
        [HttpGet("{username}")]
        public async Task<IActionResult> GetProfile(string username)
        {
            return HandleResult(await Mediator.Send(new Application.Profiles.Details.Query { Username = username }));
        }

        [HttpPut]
        public async Task<IActionResult> Edit(Application.Profiles.Edit.Command command)
        {
            return HandleResult(await Mediator.Send(command));
        }
    }
}
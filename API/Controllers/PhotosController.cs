namespace API.Controllers
{
    using Application.Photos;
    using Microsoft.AspNetCore.Mvc;

    public class PhotosContoller : BaseApiController
    {
        [HttpPost]
        public async Task<IActionResult> Add([FromForm] Add.Command command)
        {
            return HandleResult(await Mediator.Send(command));
        }
    }
}
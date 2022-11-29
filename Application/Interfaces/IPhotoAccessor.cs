namespace Application.Interfaces
{
    using Application.Photos;
    using Microsoft.AspNetCore.Http;

    public interface IPhotoAccessor
    {
        Task<PhotoUploadResult> AddPhoto(IFormFile file);

        Task<string> DeletePhoto(string publicId);
    }
}
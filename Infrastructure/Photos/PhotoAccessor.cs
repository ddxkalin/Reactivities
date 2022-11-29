namespace Infrastucture.Photos
{
    using Application.Interfaces;
    using Application.Photos;
    using CloudinaryDotNet;
    using CloudinaryDotNet.Actions;
    using Infrastructure.Photos;
    using Microsoft.AspNetCore.Http;
    using Microsoft.Extensions.Options;

    public class PhotoAccessor : IPhotoAccessor
    {
        private readonly Cloudinary _cloudinary;
        
        public PhotoAccessor(IOptions<CloudinarySettings> config)          
        {
            var account = new Account(
                config.Value.CloudName,
                config.Value.ApiKey,
                config.Value.ApiSecrets
            );
            _cloudinary = new Cloudinary(account);
        }

        public async Task<PhotoUploadResult> AddPhoto(IFormFile file)
        {
            if(file.Length > 0)
            {
                await using var stream = file.OpenReadStream();
                var uploadParams = new ImageUploadParams
                {
                    File = new FileDescription(file.FileName, stream),
                    Transformation = new Transformation().Height(500).Width(500).Crop("fill")
                };

                var uploadResult = await _cloudinary.UploadAsync(uploadParams);

                if(uploadResult.Error != null)
                {
                    throw new Exception(uploadResult.Error.Message);
                }

                return new PhotoUploadResult
                {
                    PublicId = uploadParams.PublicId,
                    Url = uploadResult.SecureUrl.ToString()
                };
            }

            return null;
        }

        public async Task<string> DeletePhoto(string publicId)
        {
            var deleteParams = new DeletionParams(publicId);
            var results = await _cloudinary.DestroyAsync(deleteParams);

            return results.Result == "ok" ? results.Result : null;
        }
    }
}
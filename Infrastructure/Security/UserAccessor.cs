namespace Infrastructure.Security
{
    using System.Security.Claims;
    using Application.Interfaces;
    using Microsoft.AspNetCore.Http;

    public class UserAccessor : IUserAccessor
    {
        private IHttpContextAccessor _httpContextAccesor;
        
        public UserAccessor(IHttpContextAccessor httpContextAccesor)
        {
            _httpContextAccesor = httpContextAccesor;
        }

        public string GetUsername()
        {
            return _httpContextAccesor.HttpContext.User.FindFirstValue(ClaimTypes.Name);
        }
    }
}
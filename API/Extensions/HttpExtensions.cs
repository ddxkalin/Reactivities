namespace API.Extensions
{
    using System.Text.Json;

    public static class HttpExtensions
    {
        public static void AddPaginationHeader(this HttpResponse response, int currentPage,
            int itemsPerPage, int totalItems, int totalPages)
        {
            var paginationheader = new 
            {
                currentPage,
                itemsPerPage,
                totalItems,
                totalPages
            };
            
            response.Headers.Add("Pagination", JsonSerializer.Serialize(paginationheader));
        }
    }
}
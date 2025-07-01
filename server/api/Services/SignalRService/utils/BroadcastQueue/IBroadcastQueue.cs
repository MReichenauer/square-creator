
using Microsoft.AspNetCore.SignalR;

namespace api.Services.SignalRService.utils.BroadcastQueue
{
    public interface IBroadcastQueue
    {
        Task NotifyQueuePositionAsync(IHubCallerClients clients, string[] connectionIds);
    }
};
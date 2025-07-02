
using Microsoft.AspNetCore.SignalR;

namespace api.Services.SignalRService.utils.BroadcastQueue
{
    public interface IBroadcastQueue
    {
        Task NotifyQueuePosition(IHubCallerClients clients, string[] connectionIds);
    }
};
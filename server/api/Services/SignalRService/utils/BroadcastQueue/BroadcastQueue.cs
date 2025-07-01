using api.Services.SignalRService.utils.BroadcastQueue;
using Microsoft.AspNetCore.SignalR;

namespace api.Services.SignalRService.utils.BroadcastQueue
{
    public class BroadcastQueue : IBroadcastQueue
    {
        public async Task NotifyQueuePositionAsync(IHubCallerClients clients, string[] connectionIds)
        {
            List<Task> tasks = [];
            for (int i = 0; i < connectionIds.Length; i++)
            {
                string connectionId = connectionIds[i];

                tasks.Add(clients.Client(connectionId).SendAsync("QueuePosition", i));

                if (i == 0)
                {
                    tasks.Add(clients.Client(connectionId).SendAsync("EnterGame"));
                }
            }
            await Task.WhenAll(tasks);
        }
    }
}
using Microsoft.AspNetCore.SignalR;
using api.Services.SignalRService;
using api.Services.SignalRService.utils.BroadcastQueue;

namespace api.Hubs
{

    public class SignalRHub(ISignalRService signalRService, IBroadcastQueue broadcastQueue) : Hub
    {

        public async Task EnterQueue()
        {
            signalRService.Enqueue(Context.ConnectionId);
            await broadcastQueue.NotifyQueuePosition(Clients, signalRService.QueueSnapshot());
        }


        public async Task LeaveQueue()
        {
            signalRService.Dequeue(Context.ConnectionId);
            await broadcastQueue.NotifyQueuePosition(Clients, signalRService.QueueSnapshot());
        }


        public override async Task OnDisconnectedAsync(Exception? exception)
        {
            signalRService.Dequeue(Context.ConnectionId);
            await broadcastQueue.NotifyQueuePosition(Clients, signalRService.QueueSnapshot());
            await base.OnDisconnectedAsync(exception);
        }
    }
}
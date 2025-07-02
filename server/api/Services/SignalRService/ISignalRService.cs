namespace api.Services.SignalRService
{
    public interface ISignalRService
    {
        void Enqueue(string id);

        void Dequeue(string id);

        string[] QueueSnapshot();


    }
}
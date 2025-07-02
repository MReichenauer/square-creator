using System.Collections.Concurrent;

namespace api.Services.SignalRService
{
    public class SignalRService : ISignalRService
    {
        private readonly ConcurrentQueue<string> _queue = new();
        private readonly ConcurrentDictionary<string, byte> _activeConnections = new();


        public void Enqueue(string id)
        {
            if (string.IsNullOrEmpty(id)) return;

            if (_activeConnections.TryAdd(id, 0))
            {
                _queue.Enqueue(id);
            }

        }

        public void Dequeue(string id)
        {
            if (string.IsNullOrEmpty(id)) return;

            _activeConnections.TryRemove(id, out _);
        }

        public string[] QueueSnapshot() => [.. _queue.Where(_activeConnections.ContainsKey)];

    }
}
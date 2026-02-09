namespace TaskManagerApi.Entities;

public enum TaskStatus
{
    Pending, 
    InProgress, 
    Completed
}

public class TaskItem
{
    public int Id { get; set; } 
    public string Title { get; set; } = string.Empty; 
    public string Description { get; set; } = string.Empty; 
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow; 
    public TaskStatus Status { get; set; } = TaskStatus.Pending;
}

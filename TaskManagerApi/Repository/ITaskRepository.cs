using TaskManagerApi.Entities;

namespace TaskManagerApi.Repositories;

public interface ITaskRepository
{
    Task<List<TaskItem>> GetAllAsync();
    Task<TaskItem?> GetByIdAsync(int id);

    Task<TaskItem> AddAsync(TaskItem task);

    Task UpdateAsync(TaskItem task);

    Task DeleteAsync(int id);

    Task SaveChangesAsync();
}
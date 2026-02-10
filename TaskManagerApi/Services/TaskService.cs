using TaskManagerApi.Entities;
using TaskManagerApi.Repositories;

namespace TaskManagerApi.Services;

public class TaskService : ITaskService
{
    private readonly ITaskRepository _repository;

    public TaskService(ITaskRepository repository)
    {
        _repository = repository;
    }

    public async Task<List<TaskItem>> GetAllAsync()
    {
        return await _repository.GetAllAsync();
    }

    public async Task<TaskItem?> GetByIdAsync(int id)
    {
        return await _repository.GetByIdAsync(id);
    }

    public async Task<TaskItem> CreateAsync(TaskItem task)
    {
        await _repository.AddAsync(task);
        await _repository.SaveChangesAsync();

        return task;
    }

    public async Task<bool> UpdateAsync(int id, TaskItem updatedTask)
    {
        var existing = await _repository.GetByIdAsync(id);

        if (existing == null)
            return false;

        existing.Title = updatedTask.Title;
        existing.Description = updatedTask.Description;
        existing.Status = updatedTask.Status;

        await _repository.UpdateAsync(existing);
        await _repository.SaveChangesAsync();

        return true;
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var existing = await _repository.GetByIdAsync(id);

        if (existing == null)
            return false;

        await _repository.DeleteAsync(id);
        await _repository.SaveChangesAsync();

        return true;
    }
}
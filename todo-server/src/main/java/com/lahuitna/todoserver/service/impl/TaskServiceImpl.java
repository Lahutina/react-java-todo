package com.lahuitna.todoserver.service.impl;

import com.lahuitna.todoserver.model.Task;
import com.lahuitna.todoserver.repository.TaskRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class TaskServiceImpl implements TaskService {
    private TaskRepository taskRepository;

    @Override
    public Task addTask(Task task) {
        if (task == null)
            return null;
        return taskRepository.save(task);
    }

    @Override
    public Task readTask(Long id) {
        Optional<Task> task = taskRepository.findById(id);
        return task.orElse(null);
    }

    @Override
    public List<Task> readAll() {
        return taskRepository.findAll();
    }

    @Override
    public void delete(Long id) {
        Optional<Task> task = taskRepository.findById(id);
        task.ifPresent(value -> taskRepository.delete(value));
    }
}

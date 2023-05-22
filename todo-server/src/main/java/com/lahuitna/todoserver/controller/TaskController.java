package com.lahuitna.todoserver.controller;

import com.lahuitna.todoserver.model.Task;
import com.lahuitna.todoserver.service.impl.TaskService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000/")
public class TaskController {

    private TaskService taskServiceImpl;

    @GetMapping("/{id}")
    public Task readTask(@PathVariable Long id) {
        return taskServiceImpl.readTask(id);
    }

    @GetMapping("/")
    public List<Task> readAllTasks() {
        return taskServiceImpl.readAll();
    }

    @PostMapping("/")
    public void addTask(@RequestBody Task task) {
        taskServiceImpl.addTask(task);
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id) {
        taskServiceImpl.delete(id);
    }
}

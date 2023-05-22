package com.lahuitna.todoserver.service.impl;

import com.lahuitna.todoserver.model.Task;

import java.util.List;


public interface TaskService {

    Task addTask(Task task);

    Task readTask(Long id);

    List<Task> readAll();

    void delete(Long id);
}

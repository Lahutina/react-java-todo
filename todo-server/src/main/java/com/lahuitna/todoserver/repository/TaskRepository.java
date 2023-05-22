package com.lahuitna.todoserver.repository;

import com.lahuitna.todoserver.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {

}
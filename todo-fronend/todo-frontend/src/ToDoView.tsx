import {useEffect, useState} from "react";
import {Button, List, ListItem, ListItemText} from "@mui/material";

interface Task {
    id: number;
    title: string;
    description: string;
}

export function ToDoView() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [error, setError] = useState<Error | null>(null);

    const fetchTasks = () => {
        fetch("http://localhost:8080/", {
            method: "GET"
        })
            .then(response => {
                return response.json()
            })
            .then(data => setTasks(data))
            .catch(error => setError(error));
    };
    const deleteTask = (taskId: number) => {
        fetch(`http://localhost:8080/${taskId}`, {
            method: "DELETE",
        })
            .then(() => {
                setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
            })
            .catch((error) => setError(error));
    };

    useEffect(() => {
        fetchTasks()
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <List sx={{width: '100%', maxWidth: 640}}>
                {tasks.map((task) => (
                    <ListItem key={task.id}>
                        <ListItemText primary={task.title} secondary={task.description}/>
                        <Button variant="outlined" size="medium" onClick={() => deleteTask(task.id)}>Delete</Button>
                    </ListItem>
                ))}
            </List>
        </div>
    )
}

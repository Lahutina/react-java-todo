import React, {useState} from "react";
import axios from "axios";
import {Button, Typography, TextField, Box} from "@mui/material";

export function TaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState<Error | null>(null);

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        const task = {title, description};

        axios.post("http://localhost:8080/", task)
            .then(response => {
                console.log("Task created successfully:", response.data);
            })
            .catch(error => setError(error));
    };

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <Box sx={{ margin: "1rem" }}>
            <form onSubmit={handleSubmit}>
                <Typography variant="h5">Add Task</Typography>
                <Box sx={{ margin: "1rem 0" }}>
                    <TextField
                        label="Title"
                        defaultValue="Small"
                        variant="filled"
                        size="small"
                        value={title}
                        onChange={handleTitleChange}
                    />
                </Box>
                <Box sx={{ margin: "1rem 0" }}>
                    <TextField
                        label="Description"
                        defaultValue="Small"
                        variant="filled"
                        size="small"
                        value={description}
                        onChange={handleDescriptionChange}
                    />
                </Box>
                <Button type="submit" variant="outlined" size="medium">
                    Add Task
                </Button>
            </form>
        </Box>
    );
}


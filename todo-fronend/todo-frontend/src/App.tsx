import {ToDoView} from "./ToDoView";
import {TaskForm} from "./TaskForm";
import {Typography} from "@mui/material";

function App() {
    return (
        <div className="App">
            <Typography variant="h4" align="center">To Do List</Typography>
            <ToDoView/>
            <TaskForm/>
        </div>
    );
}

export default App;



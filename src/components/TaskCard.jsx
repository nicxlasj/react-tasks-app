import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard(props) {
  const task = props.task;
  const state = useContext(TaskContext);
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-2 hover:bg-red-400"
        onClick={(e) => {
          e.preventDefault();
          if (confirm("¿En verdad desea eliminar la tarea?")) {
            state.deleteTask(task.id);
          }
        }}
      >
        Delete task
      </button>
    </div>
  );
}

export default TaskCard;

import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "name_change": {
      return { ...state, name: action.payload };
    }
    case "startDate_change": {
      return { ...state, startDate: action.payload };
    }
    case "add_task": {
      return {
        ...state,
        tasks: [...state.tasks, { id: Date.now(), title: "" }],
      };
    }
    case "title_change": {
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id == action.payload.id) {
            return { ...task, title: action.payload.value };
          } else {
            return task;
          }
        }),
      };
    }
    case "remove_task":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    default: {
      return { ...state };
    }
  }
}

const initialState = {
  name: "",
  startDate: "",
  tasks: [],
};

export default function ProjectTask() {
    
  const [project, dispatch] = useReducer(reducer, initialState);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log("form submitted");
  //   };

  //   const handleAdd = () => {
  //     console.log("handle add");
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Project Data:", project);
  };

  const handleAdd = () => {
    dispatch({ type: "add_task" });
  };

  return (
    <div>
      <h2>Add Project</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Enter title : </label>
          <input
            type="text"
            value={project.name}
            onChange={(e) =>
              dispatch({ type: "name_change", payload: e.target.value })
            }
          />
        </div>

        <div>
          <label>Enter Start Date : </label>
          <input
            type="date"
            value={project.startDate}
            onChange={(e) =>
              dispatch({ type: "startDate_change", payload: e.target.value })
            }
          />
        </div>

        <h3>Tasks ({project.tasks.length})</h3>

        {project.tasks.map((task) => (
          <div key={task.id}>
            <input
              type="text"
              value={task.title}
              placeholder="Task title"
              onChange={(e) =>
                dispatch({
                  type: "title_change",
                  payload: { id: task.id, value: e.target.value },
                })
              }
            />
            <button
              type="button"
              onClick={() =>
                dispatch({ type: "remove_task", payload: task.id })
              }
            >
              Remove
            </button>
          </div>
        ))}

        <br />

        <button type="button" onClick={handleAdd}>
          Add Task
        </button>

        <br />
        <br />

        <button type="submit">Create Project</button>
      </form>
    </div>
  );
}

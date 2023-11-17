import { useState } from "react";
import TasksAndSubtasks from "./TasksAndSubtasks";

import "./styles.css";

const TASKS = [
  {
    task: "Study",
    subtasks: [
      { name: "Interview Preparation", completed: false },
      { name: "Screening Test", completed: false },
      { name: "React coding challenge", completed: false }
    ]
  },
  {
    task: "Project",
    subtasks: [
      { name: "Design", completed: false },
      { name: "Develop", completed: false },
      { name: "Deploy", completed: false }
    ]
  }
];

export default function App() {
  const [tasks, setTasks] = useState(TASKS);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 30
      }}
    >
      <TasksAndSubtasks taskArray={tasks} setTaskArray={setTasks} />
    </div>
  );
}

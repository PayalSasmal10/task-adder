const TasksAndSubtasks = ({ taskArray, setTaskArray }) => {
  // YOUR CODE HERE

  const clickListHanler = (taskIndex, subTaskIndex) => {
    const newTaskArry = [...taskArray];
    newTaskArry[taskIndex].subtasks[subTaskIndex].completed = !newTaskArry[
      taskIndex
    ].subtasks[subTaskIndex].completed;
    console.log(newTaskArry);
    setTaskArray(newTaskArry);
  };

  const taskCompleteHandler = (task) => {
    return task.subtasks.every((subtask) => subtask.completed);
  };

  const clearCompletedData = () => {
    console.log(taskArray);
    const newTaskArry = taskArray.map((task) => ({
      ...task,
      subtasks: task.subtasks.filter((subtask) => !subtask.completed)
    }));
    setTaskArray(newTaskArry);
  };

  return (
    <div>
      <button onClick={clearCompletedData}>Clear Completed Task</button>
      {taskArray.map((task, taskIndex) => {
        return (
          <div key={task.subtasks}>
            <h1
              onClick={() => taskCompleteHandler(task)}
              style={{
                textDecoration: taskCompleteHandler(task)
                  ? "line-through"
                  : "none"
              }}
            >
              {task.task}
            </h1>
            <ul className="list-data">
              {task.subtasks.map((subtask, subTaskIndex) => {
                return (
                  <div key={subtask.name}>
                    <li
                      onClick={() => clickListHanler(taskIndex, subTaskIndex)}
                      style={{
                        textDecoration: subtask.completed
                          ? "line-through"
                          : "none"
                      }}
                    >
                      {subtask.name}
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default TasksAndSubtasks;

import React, { useState } from "react";

const Tasks = ({ task, toggleTask, deleteTask }) => {
  console.log(task);
  return (
    <div className=" w-96 mt-2">
      <div class="">
        <ul>
          <li class=" rounded-sm  shadow-md">
            <div class="flex align-middle flex-row justify-between space-x-2">
              <div class="p-2">
                <input
                  type="checkbox"
                  class="h-6 w-6 "
                  value="true"
                  onClick={() => toggleTask(task.id)}
                />
              </div>
              <div class="p-2 text-left">
                <p
                  class={`${
                    task.isCompleted ? "line-through" : ""
                  } text-lg  text-gray-900`}
                >
                  {task.title}
                </p>
              </div>
              <button
                class="flex text-gray-900 p-2 rounded-lg"
                onClick={() => deleteTask(task.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    addTask(title);
    setTitle("");
  }

  function addTask(taskTitle) {
    setTasks([
      ...tasks,
      {
        id: Math.floor(Math.random() * 10),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
    setTitle("");
  }

  function deleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  }

  function onChangeTitle(e) {
    setTitle(e.target.value);
  }

  function toggleTask(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <div className="w-full h-screen flex justify-center pt-20 text-center">
      <div className="flex-col">
        <h1 className="text-3xl font-sans font-bold py-8">Todo List</h1>
        <div className="w-96">
          <form onSubmit={handleSubmit} className="flex justify-between">
            <input
              className="shadow-sm w-full px-2 py-2 mr-2 bg-gray-50"
              type="text"
              onChange={onChangeTitle}
              value={title}
              placeholder="Add new task"
            />
            <button className="px-4 py2 bg-green-900 rounded-md text-white">
              Add
            </button>
          </form>

          <div className="flex justify-between pt-10">
            <h1>Created tasks: {tasks.length}</h1>
            <h1>
              Completed: {tasks.filter((task) => task.isCompleted).length} of{" "}
              {tasks.length}
            </h1>
          </div>
          {tasks.map((task) => (
            <Tasks
              key={task.id}
              task={task}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;

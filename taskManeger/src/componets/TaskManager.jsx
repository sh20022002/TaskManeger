import React, { useState } from 'react';
import styles from '../css/TaskManager.module.css'; // CSS module for Task Manager styles

const TaskManager = () => {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([]);

  // Handle input change
  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  // Add a new task
  const addTask = () => {
    const task = taskInput.trim();
    if (task === '') {
      alert('Please enter a valid task.');
      return;
    }

    // Add the new task to the list
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), task }
    ]);

    // Clear the input field after adding the task
    setTaskInput('');
  };

  // Delete a task by its id
  const deleteTask = (id) => {
    // Filter out the task that matches the id and update the state
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className={styles.taskManager}>
      
      {/* Input for new task */}
      <input
        type="text"
        value={taskInput}
        onChange={handleInputChange}
        placeholder="Enter a task"
        className={styles.inputField}
      />

      {/* Button to add task */}
      <div className={`${styles.buttonGroup}`}>
        <button className={styles.addButton} onClick={addTask}>
          Add Task
        </button>
      </div>

      {/* Task List */}
      <div className={styles.tasksContainer}>
        {tasks.map((task) => (
          <div
            key={task.id}
            className={styles.taskItem} // Style to look like a button
            onClick={() => deleteTask(task.id)} // Delete task on click
            role="button" // Accessible as a button for screen readers
            tabIndex="0" // Make it focusable like a button
          >
            {task.task}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskManager;

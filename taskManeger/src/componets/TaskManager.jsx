import React, { useState } from 'react';
import styles from '../css/TaskManager.module.css'; // CSS module for Task Manager styles
import { ReactComponent as DeleteIcon } from '../assets/Trash.svg'; // SVG delete icon

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
      { id: Date.now(), task, completed: false }
    ]);

    // Clear the input field after adding the task
    setTaskInput('');
  };

  // Delete a task by its id
  const deleteTask = (id) => {
    // Filter out the task that matches the id and update the state
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // Toggle task completion
  const toggleTaskCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className={styles.taskManager}>
      <h2 className={styles['text-color']}>Task Manager</h2>
      <input
        type="text"
        value={taskInput}
        onChange={handleInputChange}
        placeholder="Enter a task"
        className={styles.inputField}
      />

      {/* Button to Add Task */}
      <div className={styles.buttonGroup}>
        <button className={styles.addButton} onClick={addTask}>
          Add Task
        </button>
      </div>

      {/* Task List */}
      <div className={styles.tasksContainer}>
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`${styles.taskItem} ${task.completed ? styles.completed : ''}`}
          >
            <span onClick={() => toggleTaskCompletion(task.id)} className={styles.taskText}>
              {task.task}
            </span>
            {/* Delete Button with Icon */}
            <button className={styles.deleteButton} onClick={() => deleteTask(task.id)}>
              <DeleteIcon width="16px" height="16px" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskManager;

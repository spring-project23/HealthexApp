import React, { useState } from 'react';
import './Medications.css';



const ElderlyCompanionApp = () => {
  const [medicationName, setMedicationName] = useState('');
  const [medicationTime, setMedicationTime] = useState('');
  const [medications, setMedications] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskDueDate, setTaskDueDate] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleMedicationSubmit = (e) => {
    e.preventDefault();
    const newMedication = {
      name: medicationName,
      time: medicationTime,
    };
    setMedications([...medications, newMedication]);
    setMedicationName('');
    setMedicationTime('');
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      name: taskName,
      dueDate: taskDueDate,
    };
    setTasks([...tasks, newTask]);
    setTaskName('');
    setTaskDueDate('');
  };

  return (
    <div className="medications-container">
      <h2>Daily Reminders App</h2>
      <br></br>
      <h3>Medication Reminders</h3>
      <form onSubmit={handleMedicationSubmit}>
        <label>
          Medication Name:
          <input
            type="text"
            value={medicationName}
            onChange={(e) => setMedicationName(e.target.value)}
          />
        </label>
        <label>
          Medication Time:
          <input
            type="time"
            value={medicationTime}
            onChange={(e) => setMedicationTime(e.target.value)}
          />
        </label>
        <button type="submit">Add Medication</button>
      </form>
      <ul>
        {medications.map((medication, index) => (
          <li key={index}>
            {medication.name} - {medication.time}
          </li>
        ))}
      </ul>
<br></br><br></br>
      <h3>Daily Tasks</h3>
      <form onSubmit={handleTaskSubmit}>
        <label>
          Task Name:
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </label>
        <label>
          Due Date:
          <input
            type="date"
            value={taskDueDate}
            onChange={(e) => setTaskDueDate(e.target.value)}
          />
        </label>
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.name} - {task.dueDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ElderlyCompanionApp;

import { useState } from "react";
import "./cancelBtn.css";

export const CancelBtn = () => {
  const [task, setTask] = useState([
    { id: 1, name: "Task 1" },
    { id: 2, name: "Task 2" },
    { id: 3, name: "Task 3" },
  ]);

  const handleCancel = (id) => {
    const updated = task.filter((t) => t.id !== id);
    setTask(updated);
  };

  return (
    <div className="task-container">
      <h2 className="title">Task List</h2>

      {task.map((t) => (
        <div key={t.id} className="task-item">
          <span className="task-name">{t.name}</span>

          <button className="cancelBtn" onClick={() => handleCancel(t.id)}>
            Cancel
          </button>
        </div>
      ))}
    </div>
  );
};

import { useState } from "react";
import "./Todo.css";
import { MdCheckCircle, MdDelete } from "react-icons/md";
export const Todo = () => {
  const [inputValue, setInputValue] = useState("");

  // variable for store the data
  const [task, setTask] = useState([]);

  const handleInputChange = (value) => {
    setInputValue(value);
  };
  // console.log(value);

  const handleFormSubmit = (event) => {
    //  prevent for use to submit ?
    event.preventDefault();

    // Validation-1 current state is empty ho return na ho
    if (!inputValue) return;

    // Validation-2 Same value hai ya nahi
    if (task.includes(inputValue)) {
      setInputValue("");
      return;
    }

    // previous value ke sath current value ke sath as it rahe
    setTask((prevTask) => [...prevTask, inputValue]);

    // Validation-3 jab task submit ho jaye to input field empty ho jate
    setInputValue("");
  };

  return (
    <section className="tod-container">
      <header>
        <h1>Todo List</h1>
      </header>
      <section className="form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              className="form-input"
              autoComplete="off"
              value={inputValue}
              onChange={(event) => handleInputChange(event.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="form-button">
              Add Task
            </button>
          </div>
        </form>
      </section>
      <section className="myUnOrdList">
        <ul>
          {task.map((curTask, index) => {
            return (
              <li key={index} className="todo-item">
                <span>{curTask}</span>
                <button className="check-btn">
                  <MdCheckCircle />
                </button>
                <button className="delete-btn">
                  <MdDelete />
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
};

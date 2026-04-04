import React, { useState, useEffect } from "react";
import "./DateTime.css";

export const DateTime = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const formattedDate = date.toLocaleDateString();
      const formattedTime = date.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="datetime-container">
      <div className="datetime-card">
        <h1 className="title">Current Date & Time</h1>
        <h3 className="time">{dateTime}</h3>
      </div>
    </div>
  );
};

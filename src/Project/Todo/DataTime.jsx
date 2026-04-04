import React, { useState, useEffect } from "react";

export const DataTime = () => {
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
    <div>
      <h1>DateTime</h1>
      <h3>{dateTime}</h3>
    </div>
  );
};

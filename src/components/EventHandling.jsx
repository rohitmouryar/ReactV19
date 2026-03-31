import "../components/Ev.css";
export const EventHandling = () => {
  function handleButtonClick() {
    alert("Hey I am Button click");
  }
  return (
    <div>
      <h1>Event Handling in React</h1>
      <button onClick={handleButtonClick}>Click Me</button>
    </div>
  );
};

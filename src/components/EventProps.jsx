export const EventProps = () => {
  const HandleWelcomeUser = (user) => {
    alert(`Hey, ${user} `);
  };

  const handleHover = () => {
    alert(`hey Thanks for hovering me `);
  };
  return (
    <>
      <WelcomeUser
        onclick={() => HandleWelcomeUser("Rohit Mourya")}
        onMouseEnter={handleHover}
      />
    </>
  );
};

const WelcomeUser = ({ onclick, onMouseEnter }) => {
  const Greeting = () => {
    alert("Hey I am Greeting");
    // onClick();
  };
  return (
    <>
      <button onClick={onclick}>click</button>
      <button onMouseEnter={onMouseEnter}>Hover me </button>
      <button onClick={Greeting}>Greet me </button>
    </>
  );
};

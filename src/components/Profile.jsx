function Profile() {
  return (
    <>
      <h1>Profile</h1>
      <ProfileCard
        name="Rohit Mourya"
        age={24}
        profession="Software Engineer"
        greeting={
          <strong>
            Hello, I am Rohit Mourya. I am a Software Engineer. I am 24 years
            old.
          </strong>
        }
      >
        <p>hobbies : Reding</p>
        <button>Contact</button>
      </ProfileCard>

      <h1>Profile</h1>
      <ProfileCard
        name="Rohit Mourya"
        age={24}
        profession="Software Engineer"
        greeting={
          <strong>
            Hello, I am Rohit Mourya. I am a Software Engineer. I am 24 years
            old.
          </strong>
        }
      >
        <p>hobbies : Reding</p>
        <button>Contact</button>
      </ProfileCard>
    </>
  );
}

export default Profile;

// function ProfileCard(props) {
//   return (
//     <div>
//       <h2>Name : {props.name}</h2>
//       <p>Age : {props.age}</p>
//       <p>Profession : {props.profession}</p>
//       <div>{props.greeting}</div>
//     </div>
//   );
// }

// function ProfileCard(props) {
//   const { name, age, profession, greeting, children } = props;
//   return (
//     <div>
//       <h2>Name : {name}</h2>
//       <p>Age : {age}</p>
//       <p>Profession : {profession}</p>
//       <div>{greeting}</div>
//       <div>{children}</div>
//     </div>
//   );
// }

function ProfileCard({ name, age, profession, greeting, children }) {
  // const { name, age, profession, greeting, children } = props;
  return (
    <div>
      <h2>Name : {name}</h2>
      <p>Age : {age}</p>
      <p>Profession : {profession}</p>
      <div>{greeting}</div>
      <div>{children}</div>
    </div>
  );
}

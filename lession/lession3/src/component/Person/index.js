import React, { useState } from "react";

const Person = () => {
  const [person, setPerson] = useState({ name: "MindX", age: 10 });

  const increaseAge = () => {
    person.age = person.age + 1;
    setPerson({ ...person, age: person.age + 1 });
  };

  return (
    <div>
      <p>
        Hello! I'm {person.name}. I'm {person.age} years old.
      </p>
      <button onClick={increaseAge}>Increase age</button>
    </div>
  );
};

export default Person;

import React, { useState } from "react";
import AppTable from "./component/AppTable";

function App() {
  const persons = [
    {
      name: "Bob",
      gender: "male",
      age: "50"
    },
    {
      name: "Alice",
      gender: "male",
      age: "20"
    },
    {
      name: "Dechathorn Intravijit 620612148",
      gender: "male",
      age: "19"
    }
  ];

  const personsElements = persons.map((person, index) => {
    return <AppTable key={index} person={person} />;
  });

  const [count, setCount] = useState(620612148);

  return (
    <div class="ml-2">
      <h3 class="title is-3">Person List</h3>

      {/* Convert me to a component! */}
      {personsElements}

      {/* Code me please! */}
      <h3 class="title is-3">ID Counter</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(620612148)}>reset</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default App;

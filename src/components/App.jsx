import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form submit={fullName}>
        <input
          onChange={handleChange}
          value={fullName.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          value={fullName.lName}
          name="lName"
          placeholder="Last Name"
        />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setFullName((prevValue) => {
      if (name === "fname") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lname") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fname"
          onChange={handleChange}
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          name="lname"
          onChange={handleChange}
          placeholder="Last Name"
          value={fullName.lName}
        />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

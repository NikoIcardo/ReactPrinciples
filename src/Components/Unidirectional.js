import React, { useState } from "react";

import Card from './Card'; 
import Container from './Container';

const Unidirectional = () => {
  const [state, setState] = useState("State");
  const handleChange = e => {
    setState(e.target.value);
  };

  return (
    <Container id="unidirectional" title="Unidirectional Data Flow">
      <Card className="Title-font">
          <p className="leading-relaxed mb-4">
            In React there is a 'unidirectional data flow' meaning that data
            does not flow back and forth between component state's and the DOM.
          </p>
          <h3 className="text-med  mb-4">
            Data flows instead in one direction along the following loop:
          </h3>
          <ul className="list-disc mx-4 mb-4">
            <li>States updates the View</li>
            <li>In the View, Actions can be triggered</li>
            <li>Actions then may update States and this process cycles in a loop</li>
          </ul>
          <p className="leading-relaxed mb-4">
            To demonstrate this, enter text into the following input:  
          </p>
        </Card>
        <Card className="ml-10">
          <p className="leading-relaxed mb-4">
            This input is part of the view. An action of entering text will update the state tied to the input and then the state will
            update the value of the input and the text below it.   
          </p>
          <input
            class="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="input"
            placeholder="Update the State Here"
            onChange={handleChange}
          />
            <h2 className="text-center text-3xl ">
              {state}
            </h2>
        </Card>
    </Container>
  );
};

export default Unidirectional;

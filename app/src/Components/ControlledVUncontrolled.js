import React, { useState, useRef } from "react";

import Container from "./Container";
import Card from "./Card";

const Controlled = () => {
  const [state, setState] = useState("");

  const alertValue = () => {
    alert(state);
  };

  return (
    <React.Fragment>
      <input
        className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <button
        className="bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-3 border border-yellow-500 hover:border-transparent rounded"
        onClick={alertValue}
      >
        Click Here
      </button>
    </React.Fragment>
  );
};

const Uncontrolled = () => {
  const inputRef = useRef();

  const alertValue = () => {
    alert(inputRef.current.value);
  };

  return (
    <React.Fragment>
      <input
        className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        ref={inputRef}
      />
      <button
        className="bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-3 border border-yellow-500 hover:border-transparent rounded"
        onClick={alertValue}
      >
        Click Here
      </button>
    </React.Fragment>
  );
};

const ControlledVUncontrolled = () => {
  return (
    <Container
      id="controlledVUncontrolled"
      title="Controlled Vs. Uncontrolled Components"
      className="flex "
    >
      <Card className="w-1/2">
        <h2 className="text-lg mb-4">
          Controlled
        </h2>
        <p className="mb-4">
          Controlled components are those that are attached to some sort of state. The input component below is 
          tied to a state component that updates on the input event. When the button is pressed. The value of the state will 
          be alerted. 
        </p>
        <Controlled />
      </Card>
      <Card className="ml-8 w-1/2">
        <h2 className="text-lg mb-4">
          Uncontrolled
        </h2>
        <p className="mb-4">
          Uncontrolled components are those that are not bound to any sort of value. 
          The input button below is not attached to any sort of state value. Instead
          the value is just what the user inputs. However, the button below it will still alert the value of the input. 
          So how does this work? By using the React hook useRef, you can bind a Reference object to the input's ref property. 
          Then you can grab that value in the button by using the object's .current value. 
        </p> 
        <Uncontrolled />
      </Card>
    </Container>
  );
};

export default ControlledVUncontrolled;

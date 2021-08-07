import React, { useRef } from "react";

import Container from "./Container";
import Card from "./Card";

const UseRef = () => {
  const inputRef = useRef();
  
  const onClickHandler = () => {
    inputRef.current.focus();
  };

  return (
    <Container id="useRef" title="The useRef Hook">
      <Card>
        <p>
          The useRef hook returns an object with a single value, .current. We can do several things with this .current value. For instance, 
          if we pass a value to the useRef() call, we can specify a value for .current. We may then use the referance as a way to store mutable values updating the values using .current. 
          <br/><br/>
          One thing to note is that the reference is persisted. That is, it stays the same between re-renders. Conversely, updating a reference does not trigger a component re-render, which is 
          a key difference between a reference and a state value.  
          <br/><br/>
          Another important use case for refs is that we may assign them to the ref property of components like was done above for the Uncontrolled component.
          In the card to the right, a reference is assigned as the value of the input's ref property. This reference then points exactly at the DOM element. 
        </p>
      </Card>
      <Card className="ml-8">
        <button
          className="mb-8 bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-3 border border-yellow-500 hover:border-transparent rounded"
          onClick={onClickHandler}
        >
          Click To Focus on the input via useRef. 
        </button>
        <input
          className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          ref={inputRef}
        />
      </Card>
    </Container>
  );
};

export default UseRef;

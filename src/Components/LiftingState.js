import React, { useState } from "react";

import Container from './Container';
import Card from './Card';
import Counter from './Counter';
import IconCount from './IconCount';

const LiftingState = () => {
  const [counter, updateCounter] = useState(0);

  const increment = () => {
    updateCounter(counter + 1);
  };

  const decrement = () => {
    updateCounter(counter - 1);
  };

  return (
    <Container id="liftingState" title="Lifting State">
      <Card className="w-1/3">
        <p>
          Lifting state is an action that is done when you have multiple child components that would use the same state within a parent component. 
          The separate counter components on the right both use the same count value. So there would be no reliable way to define the 'count' 
          state they both rely on within either component. Instead, you can 'Lift' the count state's definition and functions to their closest ancestor component which
          is the container they both reside in. That way, they can both use the same value simultaneously by passing the count value and functions in as props instead. 
        </p>
        </Card>
      <Card className="ml-8">
        <Counter counter={counter} increment={increment} decrement={decrement} />
      </Card>
      <Card className="ml-8 w-2/5">
        <h2 className="text-center mb-4 text-lg">Counter: {counter}</h2>
        <IconCount counter={counter}/>
      </Card>
    </Container>
  );
};

export default LiftingState;

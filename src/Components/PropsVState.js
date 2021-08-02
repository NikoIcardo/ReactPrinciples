import React, { useState } from 'react'; 

import Container from './Container';
import Card from './Card';

// Props and State code to demonstrate concept if code is examined.
// const Child = props => {
//   return <GrandChild value={props.value}/>; 
// };

// const GrandChild = props => {
//   return <h1>{props.value}</h1>
// };

const PropsVState = () => {
  // const [value, setValue] = useState(1); 

  return (
    <Container id="propsVState" title="Props Vs. State">
      <Card>
        <p className="leading-relaxed mb-4">
          There are two kinds of data that React introduces for its reusable components. 
          These are props and states. 
        </p>
      </Card>
      <Card className="ml-8">
        <h2 className="text-lg mb-4">
          Props
        </h2>
        <p className="leading-relaxed mb-4">
          Props are values that are passed as an argument to child components. 
          Child components cannot alter these values unless they request to the parent component to change the value.
        </p>
      </Card>
      <Card className="ml-8">
        <h2 className="text-lg mb-4">
          States
        </h2>
        <p className="leading-relaxed mb-4">
          States are pieces of data defined inside of a component that can be altered by the component that defines them. 
          States are also controllable by React Hooks. States can be passed down as props to other components. 
        </p>
      </Card>
    </Container> 
  ); 
};

export default PropsVState; 
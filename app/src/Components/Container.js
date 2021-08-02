import React from 'react'; 
import PropsVState from './PropsVState';

const Container = props => {
  return (
    <section id={props.id}>
      <h2 className="text-2xl m-4">{props.title}</h2>
      <div className="container mx-auto py-4 px-10 flex flex-row justify-left">
        {props.children}
      </div>
    </section>
  ); 
};

export default Container; 
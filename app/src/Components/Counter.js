import React from 'react'; 


const Counter = props => {
  return(
    <React.Fragment>
      <h2 className="text-center mb-4 text-lg">Counter: {props.counter}</h2>
      <button
        className="bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-3 border border-yellow-500 hover:border-transparent rounded"
        onClick={props.increment}
      >
        increment
      </button>
      <button
        className="bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-3 border border-yellow-500 hover:border-transparent rounded"
        onClick={props.decrement}
      >
        decrement
      </button>
    </React.Fragment>
  );
};

export default Counter; 
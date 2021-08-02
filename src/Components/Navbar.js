import React from 'react'; 

const Navbar = () => {
  return (
    <header className="bg-yellow-300 md:sticky top-0 z-10"> 
      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
          <a className="title-font font-medium text-black ml-3 text-xl" href="#about">
            React Principles 
          </a>
        <nav>
          <a href="#unidirectional" className="text-gray-800 p-1 ml-4 text-med">
            Unidirectional Data Flow 
          </a>
          <a href="#propsVState" className="text-gray-800 p-1 ml-4 text-med">
            Props Vs. State
          </a>
          <a href="#liftingState" className="text-gray-800 p-1 ml-4 text-med">
            Lifting State
          </a>
          <a href="#controlledVUncontrolled" className="text-gray-800 p-1 ml-4 text-med">
            Controlled vs Uncontrolled
          </a>
          <a href="#useRef" className="text-gray-800 p-1 ml-4 text-med">
            The useRef Hook
          </a>
        </nav>
      </div>
    </header>
  ); 
};


export default Navbar; 
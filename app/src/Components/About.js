import React from 'react'; 


const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 lg:flex-col md:flex-row items-start">
        <div className="flex-grow flex flex-col items-start">
          <h1 className="title-font text-5xl mb-8">
          Welcome to my React Principles Demo
          </h1>
          <p className="leading-relaxed text-xl">
            This site is intended to demonstrate some essential principles of React and is built using React and Tailwind CSS.
            <br className="inline-block"/>
          </p>
          <hr/>
        </div>
      </div>
    </section>
  );
};

export default About; 
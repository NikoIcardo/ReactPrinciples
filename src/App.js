import './App.css';

import Navbar from './Components/Navbar';
import About from './Components/About';
import Unidirectional from './Components/Unidirectional';
import PropsVState from './Components/PropsVState';
import LiftingState from './Components/LiftingState';
import ControlledVUncontrolled from './Components/ControlledVUncontrolled';
import UseRef from './Components/UseRef';


function App() {
  return (
    <main className="divide-y divide-yellow-500">
      <Navbar />
      <About />
      <Unidirectional />
      <PropsVState />
      <LiftingState />
      <ControlledVUncontrolled />
      <UseRef/>
    </main>
  );
}

export default App;

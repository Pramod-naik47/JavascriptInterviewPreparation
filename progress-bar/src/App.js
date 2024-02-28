import Stepper from "./components/Stepper";
import { STEPS } from "./utilities/Data";
import "./App.css"

function App() {
  return (
    <div >
      <h2 style={{textAlign: "center"}}>Checkout</h2>
      <Stepper stepsConfig={STEPS}/>
    </div>
  );
}

export default App;

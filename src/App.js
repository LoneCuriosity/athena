import landing_icon from "./169.svg"
import icon from "./icon.svg"

function App() {
  return (
    <div>
      <div className="flex flex-row p-2 gap-2 items-center">
        <img src={icon}></img>
        <p className="font-Orbitron uppercase text-6xl text-stone-700">athena</p>
      </div>
      <img src={landing_icon}></img>
    </div>
  );
}

export default App;

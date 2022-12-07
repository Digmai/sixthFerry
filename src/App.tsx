import "./App.css";
import { LeftBar } from "./components/LeftBar";
import { Leyout } from "./components/Leyout";
import { TopBar } from "./components/TopBar";
import { Сollider } from "./components/Сollider";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Leyout>
        <LeftBar />
        <Сollider />
      </Leyout>
    </div>
  );
}

export default App;

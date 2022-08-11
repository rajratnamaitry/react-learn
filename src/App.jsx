import "./App.css";
import Basics from "./pages/Basics";
import Hooks from "./pages/Hooks";
/**
 *  application starting point
 * @returns HTML
 */
export default function App() {
  console.log("app");
  return (
    <div className="App">
      <Hooks></Hooks>
      {/* <Basics></Basics> */}
      <div> App </div>
    </div>
  );
}

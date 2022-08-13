import "./App.css";
import Basics from "./pages/Basics";
import Hooks from "./pages/Hooks";
import ReduxDemo from "./pages/Redux";
/**
 *  application starting point
 * @returns HTML
 */
export default function App() {
  console.log("app");
  return (
    <div className="App">
      <ReduxDemo></ReduxDemo>
      {/* <Hooks></Hooks> */}
      {/* <Basics></Basics> */}
      <div> App </div>
    </div>
  );
}

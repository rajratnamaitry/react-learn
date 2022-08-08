import "./App.css";
import MessageClass from "./components/State/MessageClass";
import EventBindClass from "./components/EventBinding/EventBindingClass";
import MethodAsProps from "./components/MethodAsProps/MethodAsProps";
import LifeCycleA from "./components/LifeCycle/LifeCycleA";
import Fragment from "./components/Fragment";
import PureComp from "./components/PureComp/PureComp";
import ParentComp from "./components/PureComp/ParentComp";
import RefEleCom from "./components/RefEl/RefEleCom";
import FocusInput from "./components/RefEl/FocusInput";
import ParentFwdRef from "./components/RefEl/ParentFwdRef";
import Portal from "./components/Portal/Portal";
import HeroName from "./components/ErrorBoundary/HeroName";
import ErrorBoundaryClass from "./components/ErrorBoundary/ErrorBoundaryClass";
import ClickCounter from "./components/HighOrderComp/ClickCounter";
import HoverCounter from "./components/HighOrderComp/HoverCounter";
import Counter from "./components/RenderProps/Counter";
import CompB from "./components/Context/CompB";
import { UserProvider } from "./components/Context/userContext";
/**
 *  application starting point
 * @returns HTML
 */
export default function App() {
  console.log("app");
  return (
    <div className="App">
      {/* <MessageClass name="raj"></MessageClass> */}
      {/* <EventBindClass name="error"></EventBindClass> */}
      {/* <MethodAsProps></MethodAsProps> */}
      {/* <LifeCycleA/> */}
      {/* <Fragment></Fragment> */}
      {/* <ParentComp/> */}
      {/* <RefEleCom ></RefEleCom> */}
      {/* <FocusInput></FocusInput> */}
      {/* <ParentFwdRef></ParentFwdRef> */}
      {/* <Portal/> */}
      {/* 
        <ErrorBoundaryClass>
          <HeroName name={'Superman'}/>
          <HeroName name={'Batman'}/>
          // <HeroName name={'joker'}/>
        </ErrorBoundaryClass> 
      */}
      {/* 
        // HOC
        <ClickCounter name="HOC app comp" ></ClickCounter>
        <HoverCounter></HoverCounter> 
      */}
      {/* 
        Render props
        <Counter render={(counter, incrementCounter) => {
            return (<ClickCounter counter={counter} incrementCounter={incrementCounter} name="Render props app click name " />);
          }} />
        <Counter render={(counter, incrementCounter) => {
            return (<HoverCounter counter={counter} incrementCounter={incrementCounter} name="Render props app Hover name" />);
          }} /> 
      */}
      {/* 
        <UserProvider value="context app">
          <CompB></CompB>
        </UserProvider> 
      */}
      <div> App </div>
    </div>
  );
}

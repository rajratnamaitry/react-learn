import React from "react";
import MessageClass from "./State/MessageClass";
import EventBindClass from "./EventBinding/EventBindingClass";
import MethodAsProps from "./PassMethodAsProps/MethodAsProps";
import LifeCycleA from "./LifeCycle/LifeCycleA";
import Fragment from "./Fragment";
import PureComp from "./PureComp/PureComp";
import ParentComp from "./PureComp/ParentComp";
import RefEleCom from "./RefEl/RefEleCom";
import FocusInput from "./RefEl/FocusInput";
import ParentFwdRef from "./RefEl/ParentFwdRef";
import Portal from "./ReactPortal/Portal";
import HeroName from "./ErrorBoundary/HeroName";
import ErrorBoundaryClass from "./ErrorBoundary/ErrorBoundaryClass";
import ClickCounter from "./HighOrderComp/ClickCounter";
import HoverCounter from "./HighOrderComp/HoverCounter";
import Counter from "./RenderProps/Counter";
import CompB from "./Context/CompB";
import { UserProvider } from "./Context/userContext";

export default function Basics() {
  return (
    <div>
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
      
        <UserProvider value="context app">
          <CompB></CompB>
        </UserProvider> 
     
    </div>
  );
}

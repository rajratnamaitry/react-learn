import './App.css'
import MessageClass from './components/messageClass'
import EventBindClass from './components/eventBindingClass'
import MethodAsProps from './components/methodAsProps/methodAsProps'
import LifeCycleA from './components/LifeCycle/lifeCycleA'
import Fragment from './components/fragment'
import PureComp from './components/PureComp/pureComp'
import ParentComp from './components/PureComp/parentComp'
import RefEleCom from './components/RefEl/refEleCom'
import FocusInput from './components/RefEl/focusInput'
import ParentFwdRef from './components/RefEl/ParentFwdRef'
import Portal from './components/portal/portal'
import HeroName from './components/ErrorBoundary/heroName'
import ErrorBoundaryClass from './components/ErrorBoundary/ErrorBoundaryClass'
/**
 *  application starting point
 * @returns HTML
 */
export default function App() {
  console.log('app')
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
      {/* <ErrorBoundaryClass>
        <HeroName name={'Superman'}/>
        <HeroName name={'Batman'}/>
        // <HeroName name={'joker'}/>
      </ErrorBoundaryClass> */}
      <div> App </div>
    </div>
  )
}

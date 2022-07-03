import './App.css'
import MessageClass from './components/messageClass'
import ErrorBindClass from './components/errorBindingClass'
import MethodAsProps from './components/methodAsProps'
import LifeCycleA from './components/LifeCycle/lifeCycleA'
import Fragment from './components/fragment'
import PureComp from './components/PureComp/pureComp'
import ParentComp from './components/PureComp/parentComp'
import RefEleCom from './components/RefEl/refEleCom'
import FocusInput from './components/RefEl/focusInput'
import ParentFwdRef from './components/RefEl/ParentFwdRef'
export default function App() {
  console.log('app')
  return (
    <div className="App">
      {/* <MessageClass name="raj"></MessageClass> */}
      {/* <ErrorBindClass name="error"></ErrorBindClass> */}
      {/* <MethodAsProps></MethodAsProps> */}
      {/* <LifeCycleA/> */}
      {/* <Fragment></Fragment> */}
      {/* <ParentComp/> */}
      {/* <RefEleCom ></RefEleCom> */}
      {/* <FocusInput></FocusInput> */}
      <ParentFwdRef></ParentFwdRef>
      <div> App </div>
    </div>
  )
}

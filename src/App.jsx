import './App.css'
import MessageClass from './components/messageClass'
import ErrorBindClass from './components/errorBindingClass'
import MethodAsProps from './components/methodAsProps'
import LifeCycleA from './components/LifeCycle/lifeCycleA'
import Fragment from './components/fragment'
import PureComp from './components/PureComp/pureComp'
import ParentComp from './components/PureComp/parentComp'
function App() {
  return (
    <div className="App">
      {/* <MessageClass name="raj"></MessageClass> */}
      {/* <ErrorBindClass name="error"></ErrorBindClass> */}
      {/* <MethodAsProps></MethodAsProps> */}
      {/* <LifeCycleA/> */}
      {/* <Fragment></Fragment> */}
      <ParentComp/>
    </div>
  )
}

export default App

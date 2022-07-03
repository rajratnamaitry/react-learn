import './App.css'
import MessageClass from './components/messageClass'
import ErrorBindClass from './components/errorBindingClass'
import MethodAsProps from './components/methodAsProps'
import LifeCycleA from './components/lifeCycleA'
function App() {
  return (
    <div className="App">
      {/* <MessageClass name="raj"></MessageClass> */}
      {/* <ErrorBindClass name="error"></ErrorBindClass> */}
      {/* <MethodAsProps></MethodAsProps> */}
      <LifeCycleA/>
    </div>
  )
}

export default App

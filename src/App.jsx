import './App.css'
import MessageClass from './components/messageClass'
import ErrorBindClass from './components/errorBindingClass'
import MethodAsProps from './components/methodAsProps'
function App() {
  return (
    <div className="App">
      {/* <MessageClass name="raj"></MessageClass> */}
      {/* <ErrorBindClass name="error"></ErrorBindClass> */}
      <MethodAsProps></MethodAsProps>
    </div>
  )
}

export default App

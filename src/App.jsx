import './App.css'
import MessageClass from './components/messageClass'
import ErrorBindClass from './components/errorBindingClass'
function App() {
  return (
    <div className="App">
      {/* <MessageClass name="raj"></MessageClass> */}
      <ErrorBindClass name="error"></ErrorBindClass>
    </div>
  )
}

export default App

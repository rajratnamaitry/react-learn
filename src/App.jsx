import './App.css'
import Blank from './components/Blank'
import Buttons from './components/Buttons'
import Dashboard from './components/Dashboard'
import Forms from './components/Forms'
import Icons from './components/Icons'
import Login from './pages/login'
import Nav from './components/Nav';
import Notifications from './components/Notifications';
import PanelWeels from './components/PanelWeels'
import TableData from './pages/Table'
import Tables from './components/Tables'
import Typography from './components/Typography'
function App() {
  return (
    <div className="App">
      {/* <Notifications/> */}
      {/* <Icons/> */}
      {/* <Buttons/> */}
      {/* <Blank/> */}
      {/* <Login></Login> */}
      {/* <TableData></TableData> */}
      <Dashboard></Dashboard>
      {/* <Forms></Forms> */}
    </div>
  )
}

export default App

import './App.css'
import Logo from './assets/images/logo.svg'
import DataWrapper from './components/DataWrapper'

function App() {

  return (
    <div className="calculator-wrapper">
      {/* <h1>Tip Calculator app</h1> */}
      <img className="logo" src={Logo} alt="Splitter app logo" />
      <DataWrapper />
    </div>
  )
}

export default App

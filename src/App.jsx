import './App.css'
import Logo from './assets/images/logo.svg'
import DataWrapper from './components/DataWrapper'

function App() {

  return (
    <main className="calculator-wrapper">
      <h1 className="visuallyhidden">Tip Calculator App</h1>
      <img className="logo" width="87" height="54" src={Logo} alt="Splitter app logo" />
      <DataWrapper />
    </main>
  )
}

export default App

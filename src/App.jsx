import './App.css'
import Logo from './assets/images/logo.svg'
import DataWrapper from './components/DataWrapper'

function App() {

  return (
    <main className="calculator-wrapper">
      <img className="logo" width="87px" height="54px" src={Logo} alt="Splitter app logo" />
      <DataWrapper />
    </main>
  )
}

export default App

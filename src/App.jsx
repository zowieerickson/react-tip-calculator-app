import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Bill } from './components/CalculateBill'
import SelectTip from './components/SelectTip'
import NumberOfPeople from './components/NumberOfPeople'
import TipAmount from './components/TipAmount'
import Total from './components/Total'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="calculator-wrapper">
      <h1>Tip Calculator app</h1>
      <p></p>
      <Bill />
    </div>
  )
}

export default App

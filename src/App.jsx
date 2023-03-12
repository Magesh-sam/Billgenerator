import React,{ useState, useRef} from 'react'
import './App.css'
import BillForm from './Components/BillForm'
import FinalBill from './Components/FinalBill'


function App() {
  const [bill,setBill] = useState([])

  const printRef = useRef();

  return (
    <div className="App">

      <BillForm bill={bill} setBill={setBill}/>
      <FinalBill bill={bill}/>
    </div>
  )
}

export default App

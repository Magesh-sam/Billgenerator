import React, { useRef } from 'react'
import './FinalBill.css'
import { v4 as randomid} from  'uuid';
import ReactToPrint from 'react-to-print';



export default function FinalBill({bill}) {

    const printRef = useRef();

  
  const d = new Date();
  const date = d.toLocaleDateString();
  const time = d.toLocaleTimeString();
  return (
    <div ref={printRef}  className='finalbill'>
         <div className='hoteldetail'>
          <h1>Chicken 65 Restaurant</h1>
          <p>123, Chicken Street</p>
          <p>&#128222; +1 234 5657 123</p>
          <p>&#128231; abc@xyz.com</p>
         </div>
         <div className='billinfo'>
          <p>bill id:{randomid().split('-')}</p>
          <p>Date:{date}</p>
          <p>Time: {time}</p>
        </div>
         <div className='billheading'>
            <h1>Dish</h1>
            <h1>Price</h1>
            <h1>Quantity</h1>
            <h1>Amount</h1>
           
        </div>
        
        {bill.map((item,index)=>(
        <div className='billheading' key={index}>
            <h2>{item.dish}</h2>
            <h2>${item.unitprice}</h2>
            <h2>{item.quantity}</h2>
           <h2>${item.total}</h2>
            
        </div>

    ))}
        <h1 className='finaltotal'>Total: ${bill.reduce((acc, item) => acc + item.total, 0).toFixed(2)}</h1>
          <h3>Thank you, Visit Again!</h3>

          <ReactToPrint
        trigger={() => <button id='printbtn'>Print</button>}
        content={() => printRef.current}
      />
    </div>
  )
}

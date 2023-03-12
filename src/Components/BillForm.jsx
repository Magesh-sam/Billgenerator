import React,{useState, useRef} from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from "react-select";
import './BillForm.css'


const menu = [
    {label:'Pizza',value:8},
    {label:'Burger',value:3},
    {label:'Buritto',value:10},
    {label:'fries',value:2}
]

const quantity = [
    { label:1 ,value:1},
    { label:2 ,value:2},
    { label:3 ,value:3},
    { label:4 ,value:4},
    { label:5 ,value:5},
    { label:6 ,value:6},
    { label:7 ,value:7},
    { label:8 ,value:8},
    { label:9 ,value:9},
    { label:10 ,value:10},
]
export default function BillForm({bill,setBill}) {

  const formRef =useRef('')
  const { register, handleSubmit,control,reset,  formState: { errors } } = useForm();
  const onSubmit = data => {
    const updatedBill = [...bill];
  let foundDish = false;
  updatedBill.forEach(billItem => {
    if (billItem.dish === data.menu.label) {
      billItem.quantity = data.quantity.value;
      billItem.total = data.menu.value * data.quantity.value;
      foundDish = true;
    }
  });
  if (!foundDish) {
    updatedBill.push({
      dish: data.menu.label,
      unitprice: data.menu.value,
      quantity: data.quantity.value,
      total: data.menu.value * data.quantity.value
    });
  }
  setBill(updatedBill);
  
  }

  
  return (
    <form ref={formRef} className='form' onSubmit={handleSubmit(onSubmit)}>
        <Controller
            
            name="menu"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select className="input" {...field} options={menu} />
            )}
          />
          {errors.menu && (
            <p className="errorMsg">This is a required field.</p>
          )}
        <Controller
            

            name="quantity"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select className="input" {...field} options={quantity} />
            )}
          />
          {errors.menu && (
            <p className="errorMsg">This is a required field.</p>
          )}
      
    

      <button className='submitbtn' type='submit' >Submit</button>
    </form>
  );
}
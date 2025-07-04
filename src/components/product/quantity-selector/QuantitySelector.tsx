"use client"
import React, { useState } from 'react'
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5'

function QuantitySelector() {

  const [quantity, setQuantity] = useState(1)

  const increase = () => setQuantity(prev => (prev < 5 ? prev + 1 : 5))
  const decrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1))

  return (
    <div className='mt-3'>
    <h3 className='font-bold'>Quantity: </h3>
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <button onClick={decrease} style={{ padding: '0.5rem' }}> <IoRemoveCircleOutline size={30}/></button>
      <span className=' bg-slate-100  w-20 text-center rounded font-bold'>{quantity}</span>
      <button onClick={increase} style={{ padding: '0.5rem' }}> <IoAddCircleOutline size={30}/></button>
    </div>
    </div>
  )
}

export default QuantitySelector
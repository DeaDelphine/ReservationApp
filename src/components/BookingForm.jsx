import React, { useState } from 'react'


function BookingForm({ nameUser }) {
  const [name, setName] = useState("")
  const [date, setDate] = useState("")

  const handleSumbit = (e) => {
    e.preventDefault();
    setName("");
    setDate("");
  };
  return (
    <div>
    <form onSubmit={handleSumbit}>
      <label htmlFor="name"> Name: </label>
      <input
        type="text" 
        id='name'
        value={name}
        onChange={(e)=> setName(e.target.value)}
      />
      <label htmlFor="date"> Date: </label>
      <input
        type="date" 
        id='date'
        value={date}
        onChange={(e)=> setDate(e.target.value)}
      />
    <button type='submit'>Submit</button>
    </form>
      <p>{ nameUser }</p>
      </div>
  )
}

export default BookingForm;
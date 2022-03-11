import React from 'react'

export default function ComponentInputTypeDate(props) {
  return (
    <div className=''>
      <input type="date" className='form-control' onChange={(ev) => props.callback(ev.target.value)} required />
    </div>
  )
}


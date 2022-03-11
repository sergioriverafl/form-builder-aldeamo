
import React from 'react'

export default function ComponentInputTypeNumber(props) {
  return (
    <div className=''>
      <input type="range" className='form-control' onChange={(ev) => props.callback(ev.target.value)} required />
    </div>
  )
}

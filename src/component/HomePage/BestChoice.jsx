import React from 'react'
import bestChoice from '../../image/bestChoice/Success.svg'

export default function BestChoice(props) {
  return (
    <div style={props.bg} className="p-4 w-40 m-3  flex flex-col justify-center items-center" >
        <img src={bestChoice} alt="" />
        <h2>Under 199</h2>
    </div>
  )
}

import React from 'react'
import "./Form.css"

export default function Model({isVisible ,  errorMessage = null}) {
  if(isVisible){
  return (
    <div className='model'>
      <div className='model-content'>
        <h1 style={{color : errorMessage? "red" : "green"}}>{errorMessage ? errorMessage :"The Form Has Been Submitted Successfully"}</h1>
      </div>
    </div>
  )
}else{
  return(<></>)
}
}

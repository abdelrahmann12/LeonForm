
import React, { useState } from 'react'
import "./Form.css"
import Model from './Model'

export default function Form() {
    const [formObject , setFormObject] = useState(
        [{name:"" ,
         phonenumer: "",
         Age :"",
         isEmployee : false ,
         salary : ""}]
    )
    function  handleFormSubmit(e){
      e.preventDefault();
      alert("Dfdfdf");
    }
    
    const btnIsDisbled = formObject.name == "" || formObject.Age =="" ||formObject.phonenumer =="";
  return (
    <div className='parent'>
      <form action="" onSubmit={(e)=>{
        e.preventDefault();
      }}>
        <h1>Requesting a Leon</h1>

        <hr />     

        <label htmlFor="">Name:</label>
        <input value={formObject.name} onChange={(e)=>{
            setFormObject({...formObject , name : e.target.value})
        }} type="text" />

        <label htmlFor="">PhoneNumber:</label>
        <input value={formObject.phonenumer} onChange={(e)=>{
            setFormObject({...formObject , phonenumer:e.target.value})
        }} type="number" />

        <label htmlFor="">Age:</label>
        <input value={formObject.Age} onChange={(e)=>{
            setFormObject({...formObject , Age: e.target.value})
        }} type="number" />

        

        <label style={{marginTop : 20}} htmlFor="">Are u an employee?</label>
        <input checked={formObject.isEmployee} onClick={(e)=>{
            setFormObject({...formObject , isEmployee:e.target.checked})
        }} type="checkbox" />

        <label htmlFor="">Salary</label>
        <select value={formObject.salary} onChange ={(e)=>{
            setFormObject({...formObject , salary:e.target.value})
        }}>
            <option >less than 500$</option>
            <option >less than 100$</option>
            <option >more than 100k</option>
        </select>

        <button
         className={btnIsDisbled ? "disabled" : ""}
         onClick={handleFormSubmit}
         disabled={btnIsDisbled}
         type="submit">Submit</button>
        
      </form>

      {/* <Model></Model> */}
    </div>

    
  )
  
}

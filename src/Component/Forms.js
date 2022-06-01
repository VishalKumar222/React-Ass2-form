import React from "react";
import { useState } from "react";




const Form1=()=>{
   const data =[]
    const [name ,setName]=useState("");
    const [Dep ,setDep]=useState("");
    const [Rate ,setRate]=useState("");
    




    return (<div className="container">
         <form className="formx">
        <label for="A"><b>Name :</b></label>
        <input className="name"  type="text"  value={name} onChange={(e)=>{setName(e.target.value)}} />
         <br /> <br />
        <label for="B"><b>Department :</b></label>
        <input className="names" type="text" value={Dep} onChange={(e)=>{setDep(e.target.value)}}/>
         <br /> <br />
        <label for="C"><b>Rating :</b></label>
        <input className="namess" type="number" value={Rate} onChange={(e)=>{setRate(e.target.value)}} />
        <br />
         <button className= 'btn' type="button"   onClick={(e)=>{
             e.preventDefault() 
             data.push({name,Dep,Rate});
             console.log(data)
         }}          >SUBMIT</button>
         
    </form>
       <div>
           {
               data.map((obj)=>{
                  return <div>
                      console.log("working")
                       <h2>{obj.name}</h2>
                   </div>
               })
           }
       </div>
    </div> )
}
export default Form1;
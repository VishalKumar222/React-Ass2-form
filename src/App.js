import React, { useState } from 'react';
import './Component/style.css';

let App = () => {
  let [data, setData] = useState([])
  let [name, setName] = useState("");
  let [dep, setDep] = useState("");
  let [rate, setRate] = useState("");


 const func = (e)=>{
  e.preventDefault();

  // setData([{name,Dep,Rate}]);
  // console.log(data)
  data.push({
    UserName: name,
    UserDepartment: dep,
    UserRating: rate
  })
  setData(data)
  setName("")
  setDep("")
  setRate("")

  // console.log(data)
}
  return (<div className="container">
    <form className="formx">
      <label ><b>Name :</b></label>
      <input className="name" type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
      <br /> <br />
      <label ><b>Department :</b></label>
      <input className="name" type="text" value={dep} onChange={(e) => { setDep(e.target.value) }} />
      <br /> <br />
      <label><b>Rating :</b></label>
      <input className="name" type="number" value={rate} onChange={(e) => { setRate(e.target.value) }} />
      <br />
      <button className='btn' type="button" onClick={func}><p style={{color:"red" , fontSize:"15px"}}>SUBMIT</p></button>

    </form>

    {
      data.map((ele , id)=>{
        return (
          <div key={id}>
            <div className='output'> 
            
            <div className='flexbox'> 
                 <b style={{fontSize:"1.5rem" , fontFamily:"cursive", color:"red" , backgroundColor:"greenyellow"}}>Name:</b> {
                    ele.UserName
                  }
                  <br />
                  <br />
                 <b style={{fontSize:"1.5rem" , fontFamily:"cursive", color:"red" , backgroundColor:"greenyellow"}}>Department:</b>  {
                    ele.UserDepartment
                  }
                  <br />
                  <br />
                  <b style={{fontSize:"1.5rem" , fontFamily:"cursive", color:"red" , backgroundColor:"greenyellow"}}>Rating:</b>{
                    ele.UserRating
                  }
                  </div>
              </div>
          </div>
        )
      })
    }

  </div>)
}


export default App;

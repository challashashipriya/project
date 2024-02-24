import React,{useState} from 'react'
import axios from 'axios'
export default function Patient() {
  const [name,setName]=useState("")
  const [age,setAge]=useState("")
  const [gender,setGender]=useState("")
  const [disease,setDisease]=useState("")
  const [doctor,setDoctor]=useState("")
  const [weight,setWeight]=useState("")
  function addPatient(){
    if (name=="" && age=="" && gender=="" & disease=="" && doctor=="" && weight=="") {
      alert("Please fill all the details")
  }
      else{
        axios.post("https://doc-back.onrender.com/patients",{
          name,age,gender,disease,doctor,weight
        })
        .then((res)=>{
          console.log(res)
        })
        setAge("");
        setDisease("");
        setDoctor("");
        setGender("");
        setName("");
        setWeight("")
      }
    }
  return (
    <div class="Patients-details">
      <p>
        <input
        value={name}
          placeholder='Enter name'
          onChange={(e)=>setName(e.target.value)}/>
      </p>
      <p>
      <input
          value={age}
          placeholder='Enter age'
          onChange={(e)=>setAge(e.target.value)}/>
      </p>
      <p>
      <input
          value={gender}
          placeholder='Enter gender'
          onChange={(e)=>setGender(e.target.value)}/>
      </p>
      <p>
      <input
          value={disease}
          placeholder='Enter disease'
          onChange={(e)=>setDisease(e.target.value)}/>
      </p>
      <p>
      <input
          value={doctor}
          placeholder='Enter doctor'
          onChange={(e)=>setDoctor(e.target.value)}/>
      </p>
      <p>
      <input
          value={weight}
          placeholder='Enter weight'
          onChange={(e)=>setWeight(e.target.value)}/>
      </p>
      <button onClick={addPatient}>Add Patient</button>
      
    </div>
  )
}

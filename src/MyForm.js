import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Timer } from "./Timer";

export function MyForm() {
  const [inputs, setInputs] = useState({

    name: 'blank'
  });

  const [count,setCount] = useState(1)

  useEffect(()=>{
    setTimeout(()=>{
      setCount(count+1);
    },1000)
  },[count]);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
     }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  

  return (
    <form onSubmit={handleSubmit}>
      {count}
        {/* {JSON.stringify(inputs)} */}
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
        {/* <Timer value={inputs}/> */}
    </form>
  )
}



/*
Click F12 and navigate to the "Console view"
to see the result when you submit the form.
*/

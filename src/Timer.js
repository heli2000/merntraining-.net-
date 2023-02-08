import { useEffect,useState } from "react";

export function Timer(props) {
  const [count, setCount] = useState(0);
//   setCount(props.value);
  useEffect(() => {
  
    setCount(count+1);
},[]);

  return(
    <>{JSON.stringify(count)}</>
  )
}

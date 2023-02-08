import { useState } from "react";
import { Car } from "./Car";

export function Car2(props) {
    const [detail, setDetail] = useState(props.cardetail);

    const changeColor = (color) => {
        // let color = {...detail};
        // color.color="blue"
        setDetail((prev)=> {
            return {"newprop":color}
        });
    }

    return (
        <>
            <h2>{JSON.stringify(detail)}</h2>
            {/* <Car cardetail = {props.cardetail}/> */}
            <button type="button" onClick={()=>changeColor('blue')} >Change 	c				olor</button>
        </>
    )


}

//   function Garage() {
//   const year=2022;
//             return (
//               <>
//                     <h1>Who lives in my garage? </h1>
//                     <Car brand="Ford" purchaseYear={year} />
//               </>
//             );
//       }

import React from "react";
import "./button.css"
const Button=({name,link})=>{
    return(
    <>
        <div>
        <a className="lbtn" href={link}>{name}</a>
 </div>
 </>
    )
}
export default Button
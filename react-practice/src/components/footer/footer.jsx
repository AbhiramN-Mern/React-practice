import React from "react";
import Button from "../../ui/button";
import "./footer.css"
const Footer=()=>{
    return(
        <div className="header">
        <h1>footer</h1>
        <Button  link={"www.goggle.com"} name={"google"} key={1} />
        <Button  link={"www.goggle.com"} name={"amazon"} key={2} />
        <Button  link={"www.goggle.com"} name={"meta"} key={3}/>
        <Button  link={"www.goggle.com"} name={"insta"} key={4}/>

        </div>  
    )
}
export default Footer
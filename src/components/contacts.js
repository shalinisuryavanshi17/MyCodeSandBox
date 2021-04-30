import React from "react"
import Details from "./details";
import Images from "./Image";
function Contact(props)
{
  return(
    
    <div className="contacts">
      <div className="title"><h1 id="name">{props.name}</h1>
       <Images image={props.image}/>
  </div>
    <Details tel={props.tel} email={props.email}/>
      </div>
  )
 
}
export default Contact;
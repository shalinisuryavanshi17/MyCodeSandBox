import React from "react"
import Images from "./Image";
function Contact(props)
{
  return(
    
    <div className="contacts">
      <div className="title"><h1 id="name">{props.name}</h1>
       <Images image={props.image}/>
  </div>
    
      <h2>{props.tel}</h2>
    <h2>{props.email}</h2>
   </div>
  )
 
}
export default Contact;
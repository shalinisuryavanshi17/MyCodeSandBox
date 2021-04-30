import React from "react"
function Contact(props)
{
  return(
    
    <div className="contacts">
      <div className="title"><h1 id="name">{props.name}</h1>
    <div className="image"><img src={props.image} alt={props.name} />
  </div></div>
    
      <h2>{props.tel}</h2>
    <h2>{props.email}</h2>
   </div>
  )
 
}
export default Contact;
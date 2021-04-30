import Contact from "./contacts";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div><h1 style={{textAlign:"center"}}>My Contacts</h1></div>
      <Contact name="Gajbinkar Shalini" image="http://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg"  tel="+ 123456789" email="shalini@gmail.com"/>
      <Contact name="Pandiyala Kavya" image="https://cdn.mcparfum.de/Avatare/9824063B-2CEF-4C1D-87A5-C33A2792B4FB.png"  tel="+ 1638527415" email="kavya@gmail.com"/>
      <Contact name="Divya Katta" image="https://cdn.mcparfum.de/Avatare/E6E892CC-E67A-4919-AB75-88CA61346CB8.png"  tel="+ 4561237895" email="divya@gmail.com"/>
      <Contact name="Yasmeen Fatima" image="https://blogginggyan.com/wp-content/uploads/2017/03/16174790_1141893685908105_5832471631153097134_n.jpg"  tel="+ 1539518526" email="yasmeen@gmail.com"/>
    </div>
  );
}

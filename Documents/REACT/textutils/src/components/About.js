import React, { useState } from 'react'

export default function About() {

// let myStyle = {  // this is the way to add style through js , by first making object and then adding this anywhere
//   color : 'white' ,
//     backgroundColor : 'black'
// } 
 // initially ye aisa tha jaisa object upr bna h but abhi hum isse state bnayege taki js execute kr skte ya ek click me dark mode bna ske

//------------>> STATE : mtlb click kiya toh kuch aur dikhe wps click toh kuch aur msg aur sath me kaam bhi kre<<----------------------------------------------

 const [myStyle, setmyStyle] = useState(
  {     
    color : 'black' ,
    backgroundColor : 'white'
  })

  const [btnText, setBtnText] = useState("Enable Dark Mode") // second use yani ek se jyda use case bhi bna skte hain aur idhr 

  const toggleStyle = ()=>{
    if(myStyle.color === 'black'){
      setmyStyle({
        color : 'white' ,
        backgroundColor: 'black' ,
        border : '1px solid white' ,
        borderRadius : '10px'
      })
      setBtnText("Enable Dark Mode")
  }
  else{
    setmyStyle({
      color : 'black' ,
    backgroundColor: 'white'
    })
    setBtnText("Enable Light Mode")

  }
}

  return (
            <div classNameNmae="container" style = {myStyle} >
              <h2 className="my-2" >About Us</h2>
                <div className="accordion" id="accordionExample" style = {myStyle}>
          <div className="accordion-item" style = {myStyle}>
            <h2 className="accordion-header">
              <button className="accordion-button" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show"  data-bs-parent="#accordionExample">
              <div className="accordion-body" style = {myStyle}>
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item" style = {myStyle}>
            <h2 className="accordion-header">
              <button className="accordion-button" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body" style = {myStyle}>
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item" style = {myStyle}>
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body" style = {myStyle}>
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
        <div className="container my-3">
        <button type="button" onClick={toggleStyle}  className="btn btn-primary">{btnText}</button> 
        </div>
            </div>
  )
}

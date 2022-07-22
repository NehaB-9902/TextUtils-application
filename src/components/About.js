import React from 'react'

export default function About(props) {
    // const[myStyle,setmyStyle]=useState({
    //     color :'black',
    //     backgroundColor:'white'
    // })

    let myStyle = {
      color: props.mode==='dark'?'white':'#062c51' ,
      backgroundColor: props.mode==='dark'?'#062c51':'white'
    }

    
  return (
    <div className='container ' style={myStyle}>
        <div className='my-3'>
        <h2 className='my-3'>About Us</h2>
        </div>
      <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <b>Analyze Your Text</b>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Textutils gives you a way to analyze your text quickly and efficiently. You can count words, character, use this utility to convert your text to lowercase, to uppercase, remove extra spaces and copy your analyze text.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <b>Free To Use</b>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      TextUtils is a free character counter tool that provides instant character count &amp; word count statistics for a given text.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <b>Browser Compatible</b>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse " style={myStyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        This word counter software works in any web browser such as Chrome, Firefox, Safari, Opera etc. It suits to count characters in Facebook, blog, books, excel document, pdf document etc.
      </div>
    </div>
  </div>
</div>
{/* <div >
<button onClick={toggle} type="button" className="btn btn-primary my-3">{btnText}</button>
</div> */}
    </div>
  )
}

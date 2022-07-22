import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick= () => {
    //console.log("Uppercase was clicked" + text)
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to UPPERCASE","success")
  }
  const handleOnChange= (event) => {
    //console.log("On change")
    setText(event.target.value)
  }

  const handleLoClick= () => {
    //console.log("Uppercase was clicked" + text)
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to lowercase","success")
  }

  const handleClearClick= () => {
    //console.log("Uppercase was clicked" + text)
    //let newText = " "
    setText('')
    props.showAlert("Text cleared","success")
  }

  const handleSentenceClick= () => {
    //console.log("Uppercase was clicked" + text)
    let newText=text.charAt(0).toUpperCase() +
       text.substr(1).toLowerCase()
    setText(newText)
    props.showAlert("Converted to sentence","success")
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const handleReverse = (event) => {
    /* Convert string to array*/
    let strArr = text.split("");
    /* Reverse array*/
    strArr = strArr.reverse();
    /* Convert array to string*/
    let newText = strArr.join("");
    setText(newText);
    props.showAlert("Sentence reversed","success")
  }

  const handleCopyClick = (event)=>{
    const area = document.querySelector('#myBox')
    area.select();
    document.execCommand('copy')
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard","success");
}

const replaceString=()=>{
  let repval=prompt("Enter the word to be replaced:")
  let tobereplaced= new RegExp(repval,'g');

  let toreplace=prompt("Enter the text that you want to replace with:");
  
  let newText= text.replace(tobereplaced,toreplace);
  setText(newText);
  props.showAlert("Word replaced by another word","success")
}

const capitalFirstLetter = ()=>{
  let words = text.split(" ")
 let uppercaseword = ' '
  words.forEach(element => {
     uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " "
  });
  setText(uppercaseword)
  props.showAlert("First letter of each word capitalized","success")
}

{/*function handleSliceClick(event) {
  let newText = text.slice(0, 100);
  setText(newText);
}
*/}


  const [text, setText] = useState('');
  return (
    <>
    <div className='container ' style={{color:props.mode==='light'?'#062c51':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
           
           <textarea className="form-control" value={text} onChange={handleOnChange} style={{background:props.mode==='light'?'white':'#124262',color:props.mode==='light'?'#062c51':'white'}} id="myBox" rows="8" ></textarea>
        </div>
        <button  disabled={text.length===0} className='btn btn-info mx-1 my-2' onClick={handleUpClick}>Convert to UPPERCASE</button>
        <button  disabled={text.length===0} className='btn btn-info mx-1 my-2' onClick={handleLoClick}>Convert to lowercase</button>
        <button  disabled={text.length===0} className='btn btn-info mx-1 my-2' onClick={handleClearClick}>Clear Text</button>
        <button  disabled={text.length===0} className='btn btn-info mx-1 my-2' onClick={handleSentenceClick}>Sentence Case</button>
        <button  disabled={text.length===0} type="submit" onClick={speak} className="btn btn-info mx-1 my-2">Speak</button>
        <button  disabled={text.length===0} className='btn btn-info mx-1 my-2' onClick={handleReverse}>Reverse Text</button>
        <button  disabled={text.length===0} className='btn btn-info mx-1 my-2' onClick={handleCopyClick}>Copy Text</button>
        <button  disabled={text.length===0} className='btn btn-info mx-1 my-2' onClick={replaceString}>Replace word</button>
        <button  disabled={text.length===0} className='btn btn-info mx-1 my-2' onClick={capitalFirstLetter}>Capitalize 1st Letter</button>
        {/*<button className="btn btn-info mx-1 my-2" onClick={handleSliceClick}>Convert to 100 Words</button> */}
    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'#062c51':'white'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(/\s+/).filter( (element) =>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(/\s+/).filter( (element) =>{return element.length!==0}).length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}

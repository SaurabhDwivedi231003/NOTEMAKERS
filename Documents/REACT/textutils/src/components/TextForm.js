import React, {useState} from 'react'
//useState is a type of hook

export default function TextForm(props) {
    
    const [text, setText] = useState(''); // state bnaiii
    // text = "new text ";  wrong way to change state setText("newtext");  correct
    // way to change state

    const handleUpClick = () => { //mtlb jab hum 'Convert to Upper case' button me click krege toh kya hoga iske liye ye function h
        // console.log("UpperCase was Clicked : " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase !", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase !", "success");

    }

    const handleClearClick = () => {
        let newText = ' ';
        setText(newText);
        props.showAlert("Text cleared !" , "success");

    }

    const handleOnChange = (event) => { // ye banan jrrori h wrna error aane lgta h
        // console.log("On change");
        setText(event.target.value); // agr ye ni likhege toh user text area k andar type nahi kr pyega. { ye likhne se purani + nayi vhalue dono rhegi}
    }
    
     //  const replacecasefunc = () => {
     //    let existing_text = prompt("Enter which word to replace : ");
     //    let replaced_text = prompt("Enter New Text");
     //    setText(text.replaceAll(existing_text, replaced_text))
     //  }

    // const speak = () => {    let msg = new SpeechSynthesisUtterance();
    // msg.text = text;    window.speechSynthesis.speak(msg);  }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toggle')

        if (toogle.textContent == "Speak") {
            toogle.innerHTML = "Stop"
        } else {
            toogle.innerHTML = "Speak"
            if (toogle.innerHTML = "Speak") {
                window.speechSynthesis.cancel()
            }
        }
    }
    const handleExtraSpaces = ()=>{  //can also use rejix do study
        let words = text.split(' ');
        let joinedWords = '';
        // console.log(words);
        words.forEach((elem)=>{
            if(elem[0] !== undefined){
                joinedWords += elem + " ";
                console.log(joinedWords);
            }
        })
        setText(joinedWords);
        props.showAlert("Removed extra space !" , "success");

    }

    const reversed = () => {
        let splitWord = text.split("");
        let reverseWord = splitWord.reverse("");
        let joinedWords = reverseWord.join("");
        let newText = joinedWords
    
        setText(newText);
        props.showAlert("Text reversed !" , "success");

      };
    
      const handlecamelCaseonClick = () => {
        let camelCaseText = text
          .split(' ')
          .map(function (word, index) {
            // First character upper case else lower case
            return word.charAt(0)
              .toUpperCase() + word.slice(1)
              .toLowerCase();
          })
          .join(' ');
        setText(camelCaseText);
        props.showAlert("Converted to camel case !" , "success");

      }

      
const makeBold = () => {
    if (typeof text === "string") {
      const words = text.split(" ");
      const boldText = words.map((word) => <b>{word}</b>);
      return boldText;
    } else {
      return "";
      
    }
    
  };
  
  // const handleChange = (event) => {
  //   setText(event.target.value);
  // };

  const handleCopy = () => {
    console.log("I am a copy");
    var text = document.getElementById('myBox');
    text.select();
    // text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard !" , "success");

  }

 return (
    <>
    <div className="container" style={{ backgroundColor : props.mode === 'light'?'dark':'light' }}>

    <h2>{props.heading}</h2>
    {/* <h1>{props.heading} - {text} </h1> */}
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange = {handleOnChange} style={{ backgroundColor : props.mode === 'light'?'dark':'light' }} id="myBox" rows="8"></textarea>    
    </div>
    <button className = "btn btn-warning mx-2" onClick={handleUpClick}> UpperCase </button>
    <button className = "btn btn-warning mx-2" onClick={handleLoClick}> LowerCase </button>
    <button className = "btn btn-warning mx-2" onClick={ handleClearClick }> Clear Text</button>
    <button className = "btn btn-warning mx-2 my-2" onClick={speak}  id="toggle" type="submit" >Speak</button>
    <button className = "btn btn-warning mx-2 my-2" onClick={handleExtraSpaces}  type="submit" >Remove Extra Space</button>
    <button className = "btn btn-warning mx-2 my-2" onClick={reversed}  type="submit" >Reverse</button>
    <button className = "btn btn-warning mx-2 my-2" onClick={handlecamelCaseonClick}  type="submit" >Camel Case</button>
    {/* <button className="btn btn-warning mx-2 my-2" onClick={makeBold} type="submit">Bold</button> */}
    <button className="btn btn-warning mx-2 my-2" onClick={handleCopy} type="submit">Copy Text</button>

    </div>
    <div className="container my-2" id="summary" style={{ backgroundColor : props.mode === 'light'?'dark':'light' }}>
      <h3>Your text summary</h3>
       <p> {text.split(" ").length} words and {text.length} charaters</p>
       <p> Time taken to read = {0.008 * text.split(" ").length } Minutes</p>
       <h4>Bold Preview</h4>
       <p>{makeBold()}</p>
       {/* <p>{text.length>0?text: "ENTER SOMETHING ABOVE TO PREVIEW HERE"}</p> */}

    </div>

    </>
        )
}

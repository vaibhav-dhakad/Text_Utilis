import React, { useState } from "react";

const Txt = (props) => {
    const handelUpClick =   () => {
        console.log(text);
        
        let newTxt = text.toUpperCase();
        setText(newTxt);
        props.showAlert("Converted to Uppercase","success");

    };
    const handleOnChange = (event) => {
        console.log(event.target.value)
        setText(event.target.value);
        
    }
    
    const handelLowClick = () => {
        let newTxt = text.toLowerCase();
        setText(newTxt);
        props.showAlert("Converted to Lowercase","success");
    }
    const handleCopy=()=>{
        let text = document.getElementById("mybox");
        text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied","success");
}
const removeExtraSpaces = ()=>{
    let newText =text.split(/[ ]+/);
    console.log(newText);
    setText(newText.join(" ")); 
    props.showAlert("All Extra Spaces removed","success");
}
const [text, setText] = useState("");
return (
        <>

            <div className="container" style={{color:props.theme==="light"?"black":"white"}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="mybox" className="form-label">
                        Write your Text Here
                    </label>
                  
                    <textarea
                        className="form-control"
                        id="mybox"
                        value={text}
                        rows="3"
                        onChange={handleOnChange}
                        style={{backgroundColor:props.theme==="dark"?"grey":"white",
                        color:props.theme==="dark"?"white":"black"  }}
                        
                    ></textarea>
                </div>
                <button className="btn btn-primary " onClick={handelUpClick}>
                    Convert to uppercase
                    
                </button>
                <button  onClick={handelLowClick} className="btn btn-primary mx-2">
                    Convert to Lowercase
                </button>
                <button  onClick={handleCopy} className="btn btn-primary mx-2">
                    Copy Text
                </button>
                <button  onClick={removeExtraSpaces} className="btn btn-primary mx-2">
                    Remove Extra Spaces
                </button>
            </div>
<div className="container" style={{color:props.theme==="dark"?"white":"black    "}}>
    <h1>Your Text summary</h1>
    <p>{text.split(' ').length} words and {text.length} characters</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter something to preview"}</p>
</div>
        </>);
};

export default Txt;

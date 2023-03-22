import React, { useState } from "react";

const TextForm = (props) => {
    const [text , setText] = useState('');

    const changeUpperCase = ()=>{
        let upperText = text.toUpperCase();
        setText(upperText)
        props.showAlert("Converted to uppercase!" , "success")
    }
    const changeLowerCase = ()=>{
        let upperText = text.toLowerCase();
        setText(upperText)
        props.showAlert("Converted to lowercase!" , "success")
    }
    const resetBtn = ()=>{
        setText("")
        props.showAlert("Reset all text!" , "success")
    }
    const handleOnChange = (e)=>{
        setText(e.target.value)
    }
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copy all text!" , "success")
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove extra spaces text!" , "success")
    }
  return (
    <>
        <div className="container" style={{color : props.mode === 'dark' ? 'white' : '#042743'}}>
            <h1 className="mb-4">{props.heading}</h1>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    style={{backgroundColor : props.mode === 'dark' ? '#13466e' : 'white',color : props.mode === 'dark' ? 'white' : '#042743'}}
                    id="myBox"
                    rows="8"
                    value={text}
                    onChange={handleOnChange}
                ></textarea>
            </div>
            <button disabled={text.length ===0} className="btn btn-primary mx-2" onClick={changeUpperCase}>Convert to Uppercase</button>
            <button disabled={text.length ===0} className="btn btn-primary mx-2" onClick={changeLowerCase}>Convert to Lowercase</button>
            <button disabled={text.length ===0} className="btn btn-primary mx-2" onClick={resetBtn}>Reset</button>
            <button disabled={text.length ===0} className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length ===0} className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
        </div>
        <div className="container my-3" style={{color : props.mode === 'dark' ? 'white' : '#042743'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").filter((elem)=>{return elem.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(/\s+/).filter((elem)=>{return elem.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Nothing To Preview" }</p>
        </div>
    </>
  );
};

export default TextForm;

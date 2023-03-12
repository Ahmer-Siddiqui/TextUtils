import React, { useState } from "react";

const TextForm = (props) => {
    const [text , setText] = useState('');

    const changeUpperCase = ()=>{
        let upperText = text.toUpperCase();
        setText(upperText)
    }
    const changeLowerCase = ()=>{
        let upperText = text.toLowerCase();
        setText(upperText)
    }
    const resetBtn = ()=>{
        let newText = text.toUpperCase();
        setText("")
    }
    const handleOnChange = (e)=>{
        setText(e.target.value)
    }
  return (
    <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    id="myBox"
                    rows="8"
                    value={text}
                    onChange={handleOnChange}
                ></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={changeUpperCase}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={changeLowerCase}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={resetBtn}>Reset</button>
        </div>
        <div className="container my-3">
            <h1>Your text summary</h1>
            <p>{text == "" ? 0 : text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
  );
};

export default TextForm;

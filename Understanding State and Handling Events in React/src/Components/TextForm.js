import React, { useState } from "react";

const TextForm = (props) => {
    const [text , setText] = useState('Enter Text here');

    const changeUpperCase = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
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
        <button className="btn btn-primary" onClick={changeUpperCase}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={resetBtn}>Reset Textarea</button>
    </>
  );
};

export default TextForm;

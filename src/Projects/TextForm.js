import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState(" ");

    const handleUpClick = () => {
        // console.log("Uppercase was clicked"+text);
        let newText = text.toUpperCase()
        setText(newText);
    };
    const handleLowClick = () => {
        // console.log("Uppercase was clicked"+text);
        let newText = text.toLowerCase();
        setText(newText);
    };
    const handleSentenceClick = () => {
        let newText = text
            .toLowerCase()
            .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
        setText(newText);
    };

    const handleClearClick = () => {
        // console.log("Uppercase was clicked"+text);
        setText("");
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    return (
        <>
            <div className="container" style={{color: props.mode === 'light' ? 'grey' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey',color:props.mode==='dark'?'white':'black'}}
                        id="myBox"
                        rows="8"
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>
                    Convert to Lowercase
                </button>
                <button className="btn btn-primary mx-2" onClick={handleSentenceClick}>
                    Sentence case
                </button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            </div>


            <div className="container my-3" style={{ color: props.mode === 'light' ? 'grey' : 'white' }}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").length}Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter "}</p>
            </div>
        </>
    );
}

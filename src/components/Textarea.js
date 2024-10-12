import React, { useState } from 'react';

function Textarea(props) {

    const handleChange = (event) => {
        //console.log("On changed")
        setText(event.target.value);
    };

    const [text, setText] = useState('');
    const handleUpClick = () => {
        //console.log("Text is Uppercase" + text)
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleloClick = () => {
        let newText= text.toLocaleLowerCase();
        setText(newText)
    }
    const clearToClipboard = () => {
        let newText='';
        setText(newText)
    }
    const handlecopy = () =>{
        var text=document.querySelector("#box");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copy to Clipbord","Success ");
    }
    const handlesetspace = () =>{
        let spacetext=text.split(/[ ]+/);
        setText(spacetext.join(" "))
    }
    return (
        <>
            <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.top}</h1>
                <textarea id='box'
                    value={text}
                    onChange={handleChange}
                    style={{backgroundColor: props.mode==='dark'?'gray':'white', color:props.mode==='dark'?'white':'black', height:'100px',width:'350px'}}
                   
                />
                <br />
                <button className="btn btn-outline-warning my-2" onClick={handleUpClick}>Change to Uppercase</button>
                <button className="btn btn-outline-info my-4" onClick={handleloClick}>Change to Lowercase</button>
                <button className="btn btn-outline-danger" onClick={clearToClipboard}>Clear Text</button>
                <button className="btn btn-outline-info" onClick={handlecopy}>Copy Text</button>
                <button className="btn btn-outline-danger" onClick={handlesetspace}>Remove Extra Space</button>
            </div>
            <div className="container my-4"  style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>Your summary text</h1>
                <p>{text.split(" ").filter((element) => {return element.length===!0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minuts read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    );
}

export default Textarea;

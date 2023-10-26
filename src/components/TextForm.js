import React,{useState} from "react";

function TextForm(props){

    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase", "success")
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success")

    }
    const handleClearClick = () =>{
        let newText = '';
        setText(newText)
        props.showAlert("All text has been cleared", "success")

    }

    const handleOnchange = (event) =>{
        setText(event.target.value);
    }

    const [text, setText] = useState("")
    return (
        <>
        <div  className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'#303647':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnchange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>
                Convert to Uppercase
            </button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>
                Convert to Lowercase
            </button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>
                Clear
            </button>
        </div>
        <div className="container my-3" style={{color:props.mode ==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length } words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minitues read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here "}</p>
        </div>
        </>

    );
}

export default TextForm;
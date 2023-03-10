import React, {useState} from 'react'


export default function TextFrom(props) {
    const handleUpClick = ()=>{
        // console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showMssg('Converted into UpperCase', "success");
    }
    const handleLowClick = ()=>{
        let newText2 = text.toLowerCase();
        setText(newText2);
        props.showMssg('Converted into LowerCase', "success");
    }
    const handleSum = ()=>{
        // console.log("Sum: "+ text);
        const sum = parseInt(num1) + parseInt(num2);
        setsum(sum);
    }
    const SpacesHandler = ()=>{
        let newText5 = text.split(/[  ] + /);
        setText(newText5.join(" "));
        props.showMssg('Extra Spacesses are removed succesfully', 'success');
    }
    const CopyHandle = ()=>{
        const newText4 = document.getElementById("myBox");
        // newText4.select();
        navigator.clipboard.writeText(newText4.value);
        props.showMssg('Clipboard Copied', 'success');
    }
    const FunClick = ()=>{
        let newText3 = (text).startsWith("https://");
        let end = text.endsWith(".com");
        if(newText3 & end){console.log("VAlid link");}
        
        console.log(newText3);
    }
    const handleOnChange = (event)=>{
        // console.log("ONChange was clicked");
        setText(event.target.value);
    }
    const handleOnChange1 = (event)=>{
        // console.log("Num1: ");
        setnum1(event.target.value);
    }
    const handleOnChange2 = (event)=>{
        // console.log("Num2: ");
        setnum2(event.target.value);
    }
    const [num1, setnum1] = useState(0);
    const [num2, setnum2] = useState(0);
    const [sum, setsum] = useState(0);
    const [text, setText] = useState('');
    /* {text = "New text"} */
    // setText("NEw TExt");
    return (
    <form className="row g-2"><br /><br />
    <h1> </h1>
        <h1>{props.title}</h1>
        <div>
            <input type="number" name="num1" value={num1} style={{backgroundColor: props.mode === 'light'?'blue':'red', border: props.mode==='light'?'2px solid black': '2px solid white'}} className="btn btn-primary mx-2" onChange={handleOnChange1} onClick={handleSum} id="" />
            <input type="number" name="num2" value={num2} style={{backgroundColor: props.mode === 'light'?'blue':'red', border: props.mode==='light'?'2px solid black': '2px solid white'}} className='btn btn-primary mx-2' onChange={handleOnChange2} onClick={handleSum} id="" />
            <label htmlFor="" className='btn btn-danger'>Sum = {sum}</label>
        </div>
        <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">Address</label>
            <input type="text" className="form-control" id="inputAddress" style={{border: props.mode==='light'?'2px solid black':'2.5px solid red'}} placeholder="1234 Main St"/>
        </div>
        <div>
            <textarea id="myBox" className='container' style={{border: props.mode ==='light'?'3px solid black':'3px solid red', backgroundColor: props.mode ==='light'?'white': 'gray', color: props.mode === 'light'? 'black':'white'}} value={text} onChange={handleOnChange}  cols="30" rows="10"></textarea>
        </div>
        <div className="col-12">
            {/* <button type="submit" className="btn btn-primary">Sign in</button> */}
            <button className="btn btn-primary mx-2" onClick={handleUpClick} type="button" style={{backgroundColor: props.mode === 'light'?'blue':'red', border: props.mode ==='light'?'black':'white'}}>Upper Case</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick} type="button" style={{backgroundColor: props.mode === 'light'?'blue':'red', border: props.mode ==='light'?'black':'white'}}>Lower Case</button>
            <button className="btn btn-primary mx-2" onClick={FunClick} type="button" style={{backgroundColor: props.mode === 'light'?'blue':'red', border: props.mode ==='light'?'black':'white'}}>New Fun</button>
            <button className="btn btn-primary mx-2" onClick={CopyHandle} type="button" style={{backgroundColor: props.mode === 'light'?'blue':'red', border: props.mode ==='light'?'black':'white'}}>Copy</button>
            <button className="btn btn-primary mx-2" onClick={SpacesHandler} type="button" style={{backgroundColor: props.mode === 'light'?'blue':'red', border: props.mode ==='light'?'black':'white'}}>Remove Extra Spaces</button>
            {/* <button className="btn btn-primary">Button2</button>
            <button className="btn btn-primary">Button3</button>
            <button className="btn btn-primary">Button4</button><br /> */}
            <button className="btn btn-primary mx-2" onClick={handleSum} type='button'style={{backgroundColor: props.mode === 'light'?'blue':'red', border: props.mode ==='light'?'black':'white'}}>Sum</button>
        </div>
        <div className="container my-4">
            <h1>My text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters and it will take {0.008*text.split(" ").length} minutes.</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter some text in the above box to preview.'}</p>
        </div>
    </form>
  )
}

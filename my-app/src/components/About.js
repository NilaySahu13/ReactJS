import React, {useState} from 'react'

export default function About() {
  const [mystyle, setStyle]= useState({
    color: 'black',
    backgroundColor: 'white'
  })
  const [btnstate, setBtn] = useState("Enable Dark Mode");
  const toggleStyle = ()=>{
    if(mystyle.color === 'white'){
      setStyle({
        color:'black',
        backgroundColor: 'white'
      });
      setBtn("Enable DArk Mode");
    }
    else{
      setStyle({
        color: 'white',
        backgroundColor: 'black'
      });
      setBtn("Enable Light Mode");
    }
  }
  return (
    <>
    
    <div className="container" style={mystyle}>
    <h1> </h1><br /> <h1> </h1>
    <h3 className='xm-5'>About-us</h3>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" style={mystyle} aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" style={mystyle} aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body" style={mystyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
          </div>
        </div>
        <button className='btn btn-primary xm-1 ym-1 xp-3 yp-3' onClick={toggleStyle}>{btnstate}</button>
      </div>
    </div>
    <h1> </h1>
    <h1> <br /></h1>
    </>
  )
}

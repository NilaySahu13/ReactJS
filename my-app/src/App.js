import './App.css';
import About from './components/About'
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextFrom';
import React,{useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');// whether dark mode is enable or not
  const [mssg, setMssg] = useState(null);
  const showMssg = (message=null, type)=>{
    setMssg({
      alertmsg: message,
      type: type
    })
    setTimeout(()=>{
      setMssg(null);
    }, 1500)  
    
    
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showMssg("DarkMode has been Enabled", "success");
      document.title = 'My-App (Dark Mode)';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showMssg("Light mode is Enabled", "success"); 
      // setInterval(function () {document.title = 'My-App hello'}, 500);
      // setInterval(()=> {document.title = 'My-App'}, 500);
      // document.title = 'My-App';     
    }
  }
  return (
    <>
      <div className='container'>
      <br />
      <Navbar title="HOME" feat="FEATURES" mode={mode} toggleMode={toggleMode} />
      <Alert alert={mssg}/>
      {/* <Navbar title="GHAR"/> */}
      {/* <Navbar/> */}
      <TextForm title="Hamar Form!" showMssg={showMssg} mode={mode} /> 
      <About mode={mode}/>
      </div>
    </>
  );
}

export default App;

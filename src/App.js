import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import Alert from './components/Alert';

const App = () => {
  const [mode,setMode] = useState('light'); //Whether dark mode is enable or not
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout (()=> {
      setAlert (null);
    },2000);
  }

  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='gray';
      showAlert ("Dark mode has been enabled");
  

    }else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert ("Light mode has been enabled");
    }
  }
  return (
    <>
     <Navbar title='WordChange' Contact='Contact us' mode={mode} toggleMode={toggleMode}/> 
     <Alert alert={alert}/>
     <div className="container mt-sm-1 justify-center align-center">
     <Textarea showAlert ={showAlert} top="Enter the text" mode={mode}/>
     </div>
     </>
  );
};

export default App;

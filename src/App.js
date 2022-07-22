// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }


  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
  }

  const toggleMode = (cls) => {
    removeBodyClasses()
    document.body.classList.add('bg-'+cls)
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#062c51'
      showAlert("Dark mode has been enabled","success")
      document.title="Textutils -Dark mode"
      // setInterval(() => {
      //   document.title="Textutils is awesome"
      // }, 2000);
      // setInterval(() => {
      //   document.title="Install Textutils Now"
      // }, 1500);
    }
    else if(mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success")
      document.title="Textutils -Light mode"
    }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title="TEXTUTILS" aboutText="ABOUT US" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
      <Routes>
        <Route exact path="/about" element={<About mode={mode} />}>

        </Route>
        <Route exact path="/" element={<TextForm  showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> }>
        </Route>
      </Routes>

    {/* <About/> */}
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;




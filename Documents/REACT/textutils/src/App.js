//import logo from './logo.svg';
//imrs for import from react
import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
// import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";
import SocialFollow from "./SocialFollow";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App(){
  
const [mode, setMode] = useState('light'); // tells whether dark mode enable or not
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
document.body.style.backgroundColor = '#19222DD6';
document.body.style.color ='black';    // by using this we can change text color
showAlert("Dark mode has been enabled " , "success");
document.title = 'TextUtils - Comfort Mode' ;

// setInterval(() => {        // agar users ki attention leke koi msg dena h toh
//   document.title = 'Install TextUtils Now !';
// } ,1000);

const myClassElement = document.querySelector('.container-fluid');
myClassElement.style.backgroundColor = '#28272A';

// const myClassElement2 = document.querySelector('.navbar-brand');
// myClassElement2.style.backgroundColor = '#4B7D7D';

// const myClassElement3 = document.querySelector('.social-container');
// myClassElement3.style.backgroundColor = '#5F6567';

  }
  else{
    setMode('light');
    document.body.style.backgroundColor ='white ';
    document.body.style.color ='black';
    showAlert("Light mode has been enabled " , "success");
    // document.title = 'TextUtils - Comfort Mode' ;

    } 
  }

{/* ALERT STATE */}
const [alert, setAlert] = useState(null);

const showAlert = (message , type) => {
  setAlert({
       msg : message ,
       type :  type
      });
      setTimeout(() => {
        setAlert(null);
      }, 1500);
}

  return (
  <>
{/* <Navbar title = "TEXTUTILS" aboutText = "ABOUT US"/> */}
{/* <About /> */}

{/* <Router> */}
<Navbar title = "TEXTUTILS" mode={mode} toggleMode = {toggleMode} />
<Alert alert={alert}/>
<div className = "container my-3" > 
{/* <Switch> */}
      {/* <Route exact path="/about" > */}
        {/* <About /> */}
      {/* </Route> */}

      {/* <Route exact path='/'> */}
      <TextForm  showAlert={showAlert} heading = "Enter the text to analyze below " mode={mode} />
      {/* </Route> */}
      {/* </Switch> */}
      
      <SocialFollow />
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;




import './App.css';
import React, { useState } from 'react';  // 'useState' is a React Hook. Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed. Hooks allow us to "hook" into React features such as state and lifecycle methods.You must import Hooks from react. Here we are using the useState Hook to keep track of the application state. State generally refers to application data or properties that need to be tracked. There are 3 rules for hooks: 1.Hooks can only be called inside React function components. 2.Hooks can only be called at the top level of a component. 3.Hooks cannot be conditional

import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import Orders from './Components/Orders';
import About from './Components/About';
import TextTools from './Components/TextTools';
import { Routes, Route } from 'react-router-dom';


function App(props) {  // Props is a special keyword in React that stands for properties and is used for passing data from one component to another. Data with props are passed in a unidirectional flow from parent to child. 
// Example: If a component is navbar then we can pass data in the form of boolean, array, string or an object.   

  const [mode, setMode] = useState('light');
  const [bg, setBg] = useState('#a5a5a5a8');
  const [modeText, setText] = useState('Dark Mode');

  const [formStyle, setStyle] = useState({
    color: 'black',
    backgroundColor: 'white',
    border: '0px'
  });

  

  // const [orderStyle, setOStyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white',
  //   border: '0px'
  // });

  const [txtArea, setArea] = useState({
    color: 'black',
    backgroundColor: 'white',
    border: '2px solid black',
  });

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };


const toggleStyle = () => {
  if (modeText === 'Dark Mode') {
    setMode('dark');
    setBg('black');
    setText('Light Mode');
    document.body.style.backgroundColor = '#252525';   // document.body :- is used to access the body of whole document.  document.body.style :- is used to access the body style of whole document.
    // document.title = 'TextTools app - Dark mode';   // document.title :- is used to access the title of whole document.x`
    showAlert('Dark Mode Enabled', 'success');
    setStyle({
      color: 'white',
      backgroundColor: '#252525',
      border: '0px'
    })
    setArea ({
      color: 'C9C9C9',
      backgroundColor: '#9C9D9D',
      border: '2px solid black',
    })
    
  } else {
    setMode('light');
    setBg('#a5a5a5a8');
    setText('Dark Mode');
    document.body.style.backgroundColor = 'white';
    document.title = 'TextTools app - Light mode';
    setTimeout(() => {
      // document.title = 'TextTools app - Home';
    }, 1000);
    showAlert('Light Mode Enabled', 'success'); 
    setStyle({
      color: 'black',
      backgroundColor: 'white',
      border: '0px'
    })
    setArea ({
      color: 'black',
      backgroundColor: 'white',
      border: '1px solid black',
    })   
  }
};

  return (
  <>
    {/* <Navbar/>  //Calling the Navbar component. so that the navbar code should be load here. */}
        <Navbar title='TextTools' about='About Us' orders='Orders' mode={mode} bg={bg} modeText={modeText} toggleStyle={toggleStyle} active={'active'} txtArea={txtArea} />  {/* In this Navbar component 'title', 'about', orders, 'mode','bg', 'modeText', 'toggleStyle', 'active', 'textaArea' all are the props which are passed from app.js to the Navbar.js*/}
        <Alert alert={alert} /> {/* Similary here, Alert is the component called and 'alert' is the prop that is passed.*/}
        
    <Routes>
        <Route exact path='/' element= {<TextTools heading='Try, TextTools App - Character Counter, Text Converter, etc.' formStyle={formStyle} txtArea={txtArea} showAlert={showAlert}/>}/>
        
        <Route exact path='/TextApp' element= {<TextTools heading='Try, TextTools App - Character Counter, Text Converter, etc.' formStyle={formStyle} txtArea={txtArea} showAlert={showAlert}/>}/>
        
        <Route exact path='/about' element= {<About mode={mode}/>}/>
        
        <Route exact path='/orders' element= {<Orders mode={mode}/>}/>
    </Routes>  
  </>
  );
}

export default App;

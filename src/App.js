import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const toggleMode = () =>{
    if(mode === 'light'){
      setdMode("dark");
      document.body.style.backgroundColor = "rgb(27 47 68)";
      showAlert("Dark mode has been enabled","success")
      document.title = "TextUtils - Dark Mode";

      // setInterval(()=>{
      // document.title = "TextUtils is Amazing";
      // },2000)

      // setInterval(()=>{
      //   document.title = "Install TextUtils Now";
      //   },1500)
      

    }else{
      setdMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled","success")
      document.title = "TextUtils - Light Mode";
    }
  }

  const [mode, setdMode] = useState('light')//whether darkmode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }
  

  
  return (
    <>
      {/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3"  >

      <TextForm showAlert={showAlert} heading='Enter the text to analyze below' mode={mode}/>
      </div>
      <About/> */}

     <>
      {/* <BrowserRouter> */}
        <Navbar
          title="TextUtils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />

        <Alert alert={alert} />
        <div className="container my-3" mode={mode}>
          {/* <Routes> */}
            {/* <Route path="/about" element={<About />} /> */}
          {/* </Routes> */}
          {/* <Routes> */}
            {/* <Route */}
              {/* path="/" */}
              {/* element={ */}
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              {/* } */}
            {/* /> */}
          {/* </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>
    </>
  );
}

export default App;

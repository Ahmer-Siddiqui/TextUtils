import { useState } from "react";
import "./App.css";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
// import About from "./Components/About";
import TextForm from "./Components/TextForm";

function App() {
  const [mode , setMode] = useState('dark');   
  const [alert , setAlert] = useState(null);   

  const showAlert = (message , type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled" , "success");
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled" , "success");
      document.title = 'TextUtils - light Mode';
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
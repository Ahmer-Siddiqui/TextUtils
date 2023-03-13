import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
// import About from "./Components/About";
import TextForm from "./Components/TextForm";

function App() {
  const [mode , setMode] = useState('dark'); //whether dark mode is enable or not
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;

import "./App.css";
import Navbar from "./Components/Navbar";
// import About from "./Components/About";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      <Navbar title="TextUtils"/>
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;

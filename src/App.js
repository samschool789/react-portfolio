import React, { Component} from "react";
import About from "./components/About";
import "./App.css";
import resumeData from "./resumeData";
import Header from "./components/Header"


function App() {
  return (
    <div>
    <About resumeData={resumeData}/>
    <Header resumeData={resumeData}/>
    
    
    </div>
  )
}

export default App;

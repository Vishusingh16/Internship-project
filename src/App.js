import React from "react";
import Navbar from "./components/Navbar.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./routes/Home.js";
import About from "./routes/About.js";
import Service from "./routes/Service.js";
import Contact from "./routes/Contact.js";
import SignUp from "./routes/SignUp.js";

const App = () => {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/service" element={<Service/>} />
            <Route path="/signup" element={<SignUp/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;

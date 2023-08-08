import React from "react";
import Nav from "./Nav";
import { Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Quote from "./Quote";
import Contact from "./Contact";

function App() {
  return (
    <>
      <Nav />
      <div className="background">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/quoteo" element={<Quote />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

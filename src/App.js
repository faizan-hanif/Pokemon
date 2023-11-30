import logo from './logo.png';
import './App.css';
import React from "react";
import Navbar from "./components/NavBar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Contact from "./pages/contact";
function App() {
  return (
    <div className="App">
      <div class="app-main">
        <Router>
        <div>
          <div class="App-header">
        <div class="logo-div">
        <img src={logo} className="App-logo" alt="logo" />
        </div>
          <div class="nav-div">
            <Navbar />
            </div>
            </div>
            <div class="app-main">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            </div>
            </div>
        </Router>
      </div>
      <footer class="footer">
          <p class="footer-text">2023 © All right reserved.</p>
        </footer>
    </div>
  );
}

export default App;



import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Contact from "./components/Contact";

function App() {
  

  return (
    
   <div>
    <div  className="navbar">  <Nav /></div>
  
    <Home />
    <About />
    <Menu />
    <Contact />
   </div>
    
  )
}

export default App

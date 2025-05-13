
import "./Nav.css";

function Nav(){
    return (
        <nav className="navbar">
  <div className="navbar-container container">
    
    <div className="hamburger-lines">
      <span className="line line1" />
      <span className="line line2" />
      <span className="line line3" />
    </div>
    <ul className="menu-items">
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#food">Category</a>
      </li>
      <li>
        <a href="#food-menu">Menu</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
    <h1 className="logo">Yammy Food</h1>
  </div>
</nav>

    )
}

export default Nav
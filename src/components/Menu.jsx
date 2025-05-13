
import "./Menu.css";

import hamb from "../assets/images/hamburger.jpg";
import shri from "../assets/images/shrimp.jpg";
import chik from "../assets/images/chiken.jpg";
import nodel from "../assets/images/noodel.jpg";
import salad from "../assets/images/salad with chiken.jpg";
import egg from "../assets/images/egg with avocado.jpg";

function Menu(){
    return (
        <section id="food-menu">
    <h2 className="food-menu-heading">Food Menu</h2>
    <div className="food-menu-container container">
      <div className="food-menu-item">
        <div className="food-img">
          <img src= {hamb} alt="" />
        </div>
        <div className="food-description">
          <h2 className="food-titile">Hamburger</h2>
          <p>Hamburger with fries and soda</p>
          <p className="food-price">Price: $ 150</p>
        </div>
      </div>
      <div className="food-menu-item">
        <div className="food-img">
          <img src= {shri} alt="shrimp" />
        </div>
        <div className="food-description">
          <h2 className="food-titile">Shrimp</h2>
          <p>Shrimp with special souce and salad</p>
          <p className="food-price">Price: $ 250</p>
        </div>
      </div>
      <div className="food-menu-item">
        <div className="food-img">
        <img src={chik} alt="" />
        </div>
        <div className="food-description">
          <h2 className="food-titile">Chiken</h2>
          <p>Chiken with vegetables</p>
          <p className="food-price">Price: $ 200</p>
        </div>
      </div>
      <div className="food-menu-item">
        <div className="food-img">
          <img src= {nodel} alt="" />
        </div>
        <div className="food-description">
          <h2 className="food-titile">Noodles</h2>
          <p>
            Korean Chinese noodle dish topped with a thick sauce made of
            chunjang
          </p>
          <p className="food-price">Price: $ 100</p>
        </div>
      </div>
      <div className="food-menu-item">
        <div className="food-img">
          <img src= {salad} alt="" />
        </div>
        <div className="food-description">
          <h2 className="food-titile">Salad</h2>
          <p>Salad with chiken and special souce</p>
          <p className="food-price">Price: $ 50</p>
        </div>
      </div>
      <div className="food-menu-item">
        <div className="food-img">
          <img src= {egg} alt="" />
        </div>
        <div className="food-description">
          <h2 className="food-titile">Egg with avocado</h2>
          <p>Egg and avocado with special souce</p>
          <p className="food-price">Price: $ 250</p>
        </div>
      </div>
    </div>
  </section>
    )
}

export default Menu

import "./About.css"
import image from "../assets/images/chiken and avocado.jpg"

function About(){
    return (
        <section id="about">
    <div className="about-wrapper container">
      <div className="about-text">
        <h2 className="small">About Us</h2>
        <h2>We've been making Delicious food for 10 years</h2>
        <p>
          We are a Restaurant that makes a Delicious food. Our Food is made with
          top chefs in Our Restaurant.
        </p>
      </div>
      <div className="about-img">
        <img src={image}  />
      </div>
    </div>
  </section>
    )
}


export default About
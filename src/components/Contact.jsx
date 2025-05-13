

import "./Contact.css"
import table from "../assets/images/table.jpg"

function Contact(){
    return (
        <section id="contact">
    <div className="contact-container container">
      <div className="contact-img">
        <img src={table} alt="" />
      </div>
      <div className="form-container">
        <h2>Contact Us</h2>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="E-Mail" />
        <textarea
          cols={30}
          rows={6}
          placeholder="Type Your Message"
          defaultValue={""}
        />
        <a href="#" className="btn btn-primary">
          Submit
        </a>
      </div>
    </div>
  </section>
    )
}

export default Contact
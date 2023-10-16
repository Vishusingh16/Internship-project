import React from "react";
import "./ContactFormStyles.css";

const ContactForm = () => {
    const handleRedirect = () => {
        window.open("https://forms.gle/qYSDuVQQ2XgQisgv9", "_blank");
    };
   
   
    return (
        <div className="form-container">
            <h1>Send a message to us!</h1>
            <form>
                
                <button onClick={handleRedirect}>Send Message</button>
                <br></br>
                <div className="scrolling-text-container">
        <div className="scrolling-text">
        "We're the IT equivalent of duct tape we fix everything!"
        </div>
      </div>
             
             <br></br>

            </form>
            
        </div>
    )
}

export default ContactForm;
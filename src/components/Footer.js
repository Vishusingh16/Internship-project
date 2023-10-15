import React from "react";
import "./FooterStyles.css";

const Footer = () => {
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Coding Samurai</h1>
                    </div>
              
            </div>
            <div className="bottom">
                <div>
                    <h4>Explore More</h4>
                    <a href="/">Home</a>
                    <a href="/">About us</a>
                    <a href="/">Contact us</a>
                    <a href="/">All Version</a>
                </div>
                <div>
                    <h4>Follow us </h4>
                    <a href="/">
                    <i class="fa-brands fa-linkedin"></i> Linkedin</a>
                    <a href="/">  <i className=" fa-brands fa-telegram"></i>Telegram</a>
                    <a href="/"><i className="fa fa-brands fa-youtube-square"></i>Youtube</a>
                    <a href="mailto:vaishnav.singh2021@vitbhopal.ac.in">  <i class="fa-solid fa-envelope"></i>E-mail</a>

                </div>
              
                <div>
                    <h4>Others</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                </div>
                <div>
                    <h4>Address</h4>
                 
                        <a href="/">Indira Nagar, Lucknow, India-226016,</a>

                 
                    <a href="/">Coding Samurai , Opposite Takrohi Petrol Pump</a>
                </div>
                
            </div>
        </div>
    )
}

export default Footer;
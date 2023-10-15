import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContactImg from "../assets/d25.jpg"
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const Contact = () => {
    return(<>
        <Navbar/>
        <Hero
            cName="hero-mid"
            heroImg={ContactImg}
            title=""
            url="/contact"
            btnClass="hide"
         


          
        />
        <ContactForm/>
        <Footer/>
    </>)
}

export default Contact;
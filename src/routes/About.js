import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/d24.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

const About = () => {
    return(<>
        <Navbar/>
        <Hero
            cName="hero-mid"
            heroImg={AboutImg}
            title=""
            url="/about"
            btnClass="hide"
        />
        <AboutUs />
        <Footer/>
    </>)
}

export default About;
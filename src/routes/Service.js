import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceImg from "../assets/d29.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

const Service = () => {
    return(<>
        <Navbar/>
        <Hero
            cName="hero-mid"
            heroImg={ServiceImg}
            title=""
            
            url="/service"
            btnClass="hide"
        />
        <Trip/>
        <Footer/>
    </>)
}

export default Service;
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HeroImg from "../assets/10.jpg"
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

const Home = () => {
    return(<>
        <Navbar/>
        <Hero
            cName="hero"
            heroImg={HeroImg}
         
            title="Coding Your Ascent"
            text="Learn, Code, Upskill"
           
            url="/"
            btnClass="show"
        />
        <Destination/>
        <Trip/>
        <Footer/>
    </>)
}

export default Home;
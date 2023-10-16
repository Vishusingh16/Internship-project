import React from "react";
import Mountain1 from "../assets/12.jpg";
import Mountain2 from "../assets/d3.jpg";
import Mountain3 from "../assets/d6.jpg";
import Mountain4 from "../assets/d20.jpg";
import "./DestinationStyles.css";
import DestinationData from "./DestinationData";

const Destination = (props) => {
    return (<>
        <div className="destination">
            <h1>"Forge Your Path to Excellence with Coding Samurai: Where Skill Meets Mastery!"</h1>
           
        </div>

        <DestinationData
        cName="first-des"
        heading="LEARN , CODE , UPSKILL"
        text="Welcome to Coding Samurai , where opportunities come to life! Discover a gateway to hands-on learning, real-world projects, and expert mentorship. Our curated internships pave the way for your journey into the dynamic realm of Tech World . Elevate your skills, build your portfolio, and unlock a future filled with innovation. Your pathway to success begins here at Coding Samurai!"
        img1={Mountain1}
        img2={Mountain2}
        />

        <DestinationData
        cName="first-des-reverse"
        heading="Experience Exceptional Collaboration."
        text= "At Coding Samurai, we champion the belief that success is born from collaboration. Our internship initiative is crafted to foster enduring connections among interns, mentors, and tech trailblazers. Within our vibrant community, diverse and passionate individuals come together, dedicated to pushing the frontiers of technology. Whether your interest lies in front-end development, back-end development, or UI/UX design, Coding Samurai offers a niche for every enthusiast. Take the plunge today and join our exceptional community!"
        img1={Mountain3}
        img2={Mountain4}
        />

    </>)
}

export default Destination;
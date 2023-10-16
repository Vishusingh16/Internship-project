import React from "react";
import TripData from "./TripData";
import "./TripStyles.css";
import Trip1 from "../assets/d111.jpg";
import Trip2 from "../assets/d10.jpeg";
import Trip3 from "../assets/d13.jpeg";
import Trip4 from "../assets/d14.jpeg";
import Trip5 from "../assets/d21.jpeg";
import Trip6 from "../assets/d18.jpeg";
import Trip7 from "../assets/d22.jpg";
import Trip8 from "../assets/d26.jpg";
import Trip9 from "../assets/d12.jpeg";


const Trip = () => {
    return (<div className="trip">
        <h1>Internship Positions</h1>
        <p>Discover Now</p>
        <div className="tripcard">
            <TripData
            image={Trip1}
            heading="Data Science"
            text="Dive into the realm of data science through our dynamic internships. Gain invaluable experience working on real-world data projects, collaborate with seasoned professionals, and sharpen your analytical skills. Uncover the potential of data and embark on a journey of discovery with our Data Science Internship Program. Elevate your career prospects in this thriving field."
            />
            <TripData
            image={Trip2}
            heading="Java Development"
            text="Step into the world of Java development through our specialized internship program. Gain hands-on experience in coding, collaborate with seasoned Java developers, and delve into the intricacies of this powerful programming language. Join us to enhance your skills, tackle real-world projects, and lay the foundation for a successful career in Java development. Your journey into the heart of Java programming begins here."
            />
            <TripData
            image={Trip3}
            heading="C++ Development"
            text="Dive into the world of C++ development with our specialized internship program. Gain hands-on experience, collaborate with seasoned C++ developers, and immerse yourself in real-world projects. Unlock the potential of this powerful language and pave the way for a successful career in C++ development. Your journey into the heart of robust programming begins here."
            />
          
         
        </div>
        <div className="tripcard">

        <TripData
            image={Trip4}
            heading="Web Development"
            text="Explore the world of web development with our cutting-edge internships. Unlock hands-on experience, mentorship from industry experts, and real-world projects that will elevate your skills. Join us on a journey of learning, coding, and innovation. Your gateway to a future in web development starts here."
            />
            <TripData
            image={Trip5}
            heading="Ui/Ux"
            text="Craft compelling digital experiences with our UI/UX Design internship opportunities. Immerse yourself in the art of user-centric design, collaborate on impactful projects, and refine your skills under the guidance of experienced mentors. Join us to shape the future of digital interfaces and build a portfolio that reflects your creativity and expertise in UI/UX design."
            />
            <TripData
            image={Trip6}
            heading="Mobile App Development"
            text="Embark on a transformative journey into app development with our specialized internship program. Dive into hands-on projects, collaborate with experienced developers, and explore the latest trends in mobile applications. Join us in crafting innovative solutions and shaping the future of app development. Your pathway to becoming a skilled app developer awaits – seize the opportunity."
            />

            </div>
            <div className="tripcard">
            <TripData
            image={Trip7}
            heading="Bussiness Data Analyst"
            text="Elevate your career in business analytics through our comprehensive internship program. Immerse yourself in real-world scenarios, harness the power of data-driven insights, and refine your analytical capabilities alongside industry experts. Join us on a transformative experience where you'll unlock the keys to effective decision-making and propel your career forward in the dynamic field of business analytics."
           


            />
             <TripData
            
            image={Trip8}
            heading="Artificial intelligence/Machine Learning"
            text="Unlock the doors to innovation with our internship program in Artificial Intelligence and Machine Learning. Immerse yourself in the dynamic landscape of AI and ML, where you'll work on groundbreaking projects, learn from industry pioneers, and shape the future of intelligent technologies. Join us in decoding the mysteries of data, crafting intelligent algorithms, and turning concepts into reality. Your journey into the fascinating world of AI and ML starts here."/>
             <TripData
            image={Trip9}
            heading="Python Development"
            text="Embark on a Python development adventure with our distinctive internship program. Immerse yourself in the world of versatile coding, collaborate with seasoned Python developers, and contribute to real-world projects. Unlock the potential of this dynamic language and cultivate a solid foundation for a successful career in Python development. Join us as we code, innovate, and shape the future."
            
            />

</div>
    </div>)
}

export default Trip;
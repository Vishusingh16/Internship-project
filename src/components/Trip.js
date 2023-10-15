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
import Trip8 from "../assets/d17.jpeg";
import Trip9 from "../assets/d12.jpeg";


const Trip = () => {
    return (<div className="trip">
        <h1>Internship Positions</h1>
        <p>Discover Now</p>
        <div className="tripcard">
            <TripData
            image={Trip1}
            heading="Data Science"
            text="Roughly half of all international tourists land in Bali, but the nation is so much more than this one enticing isle. From Java, Sumatra and Sulawesi to the frontier islands of West Papua (shared with Papua New Guinea) and Borneo (shared with Malaysia and Brunei), here are the top places to visit on a trip to Indonesia."
            />
            <TripData
            image={Trip2}
            heading="Java"
            text="Striking cityscapes, sandy beaches, and pristine islands were all that I had heard about Malaysia till I saw it all for real on a holiday there in October. I was pretty excited about my Malaysia trip; the itinerary of which was quite packed with lots of interesting and thrilling activities, all thanks to Tourism Malaysia. "
            />
            <TripData
            image={Trip3}
            heading="C++"
            text="France is one of the best places in the world to visit. Ever want to visit a country where beauty and style are the norm. Where a five star hotel somewhere else in the world is only a three star here. Here the word “breathtaking” is used more than “hello”. Welcome to France, the country of beauty and elegance."
            />
          
         
        </div>
        <div className="tripcard">

        <TripData
            image={Trip4}
            heading="Web Development"
            text="France is one of the best places in the world to visit. Ever want to visit a country where beauty and style are the norm. Where a five star hotel somewhere else in the world is only a three star here. Here the word “breathtaking” is used more than “hello”. Welcome to France, the country of beauty and elegance."
            />
            <TripData
            image={Trip5}
            heading="Ui/Ux"
            text="France is one of the best places in the world to visit. Ever want to visit a country where beauty and style are the norm. Where a five star hotel somewhere else in the world is only a three star here. Here the word “breathtaking” is used more than “hello”. Welcome to France, the country of beauty and elegance."
            />
            <TripData
            image={Trip6}
            heading="Mobile App Development"
            text="France is one of the best places in the world to visit. Ever want to visit a country where beauty and style are the norm. Where a five star hotel somewhere else in the world is only a three star here. Here the word “breathtaking” is used more than “hello”. Welcome to France, the country of beauty and elegance."
            />

            </div>
            <div className="tripcard">
            <TripData
            image={Trip7}
            heading="Bussiness Data Analyst"
            text="France is one of the best places in the world to visit. Ever want to visit a country where beauty and style are the norm. Where a five star hotel somewhere else in the world is only a three star here. Here the word “breathtaking” is used more than “hello”. Welcome to France, the country of beauty and elegance."
            />
             <TripData
            image={Trip8}
            heading="Machine Learning"
            text="France is one of the best places in the world to visit. Ever want to visit a country where beauty and style are the norm. Where a five star hotel somewhere else in the world is only a three star here. Here the word “breathtaking” is used more than “hello”. Welcome to France, the country of beauty and elegance."
            />
             <TripData
            image={Trip9}
            heading="Python"
            text="France is one of the best places in the world to visit. Ever want to visit a country where beauty and style are the norm. Where a five star hotel somewhere else in the world is only a three star here. Here the word “breathtaking” is used more than “hello”. Welcome to France, the country of beauty and elegance."
            />

</div>
    </div>)
}

export default Trip;
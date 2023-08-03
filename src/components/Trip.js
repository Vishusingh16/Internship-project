import React from "react";
import TripData from "./TripData";
import "./TripStyles.css";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/6.jpg";
import Trip3 from "../assets/8.jpg";

const Trip = () => {
    return (<div className="trip">
        <h1>Recent Trips</h1>
        <p>You can discover unique destinations using Google Maps</p>
        <div className="tripcard">
            <TripData
            image={Trip1}
            heading="Trip in Indonesia"
            text="Roughly half of all international tourists land in Bali, but the nation is so much more than this one enticing isle. From Java, Sumatra and Sulawesi to the frontier islands of West Papua (shared with Papua New Guinea) and Borneo (shared with Malaysia and Brunei), here are the top places to visit on a trip to Indonesia."
            />
            <TripData
            image={Trip2}
            heading="Trip in Malaysia"
            text="Striking cityscapes, sandy beaches, and pristine islands were all that I had heard about Malaysia till I saw it all for real on a holiday there in October. I was pretty excited about my Malaysia trip; the itinerary of which was quite packed with lots of interesting and thrilling activities, all thanks to Tourism Malaysia. "
            />
            <TripData
            image={Trip3}
            heading="Trip in France"
            text="France is one of the best places in the world to visit. Ever want to visit a country where beauty and style are the norm. Where a five star hotel somewhere else in the world is only a three star here. Here the word “breathtaking” is used more than “hello”. Welcome to France, the country of beauty and elegance."
            />
        </div>
    </div>)
}

export default Trip;
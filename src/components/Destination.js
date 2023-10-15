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
            <h1>About Us</h1>
            <p>Tour gives you to see the opportunity to see a lot, within a time frame</p>
        </div>

        <DestinationData
        cName="first-des"
        heading="Taal Volcano, Batangas"
        text="Taal Volcano has had several violent eruptions in the past, causing deaths on the island and the populated areas surrounding the lake, with an overall death toll of about 6,000. Because of its proximity to populated areas and its eruptive history, the volcano was designated a Decade Volcano, worthy of close study to prevent future natural disasters. All volcanoes in the Philippines are part of the Ring of Fire."
        img1={Mountain1}
        img2={Mountain2}
        />

        <DestinationData
        cName="first-des-reverse"
        heading="Mt. Daguldul Batangas"
        text="Mount Daguldol is within the vicinity of the town of San Juan in Batangas. Normally it will take you around 3 hours to reach the jump off point Barrio Hugom by private vehicle.The site has been a favorite trekking location of mountaineers. Although quite new to other hikers, it was discovered by the University of the Philippines Mountaineers in the 1990’s.The trail is man made by the locals of San Juan, Batangas and was worked out to be trekking destination."
        img1={Mountain3}
        img2={Mountain4}
        />

    </>)
}

export default Destination;
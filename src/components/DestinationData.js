import React from "react";
import Mountain1 from "../assets/12.jpg";
import Mountain2 from "../assets/d3.jpg";
import Mountain3 from "../assets/d6.jpg";
import Mountain4 from "../assets/d20.jpg";
import "./DestinationStyles.css";

const DestinationData = (props) => {
    return (<>
        <div className={props.cName}>
            <div className="des-text">
                <h2>{props.heading}</h2>
                <p>{props.text}</p>
            </div>

            <div className="image">
                <img alt="img" src={props.img1}/>
                <img alt="img" src={props.img2}/>                
            </div>
        </div>
    </>)
}

export default DestinationData;
import "./TripStyles.css";

const TripData = (props) => {
    return(<div className="t-card">
        <div className="t-image">
            <img src={props.image} alt="image"/>
        </div>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
        <a href="https://forms.gle/qYSDuVQQ2XgQisgv9">  Apply Now</a>
    </div>)
}

export default TripData;
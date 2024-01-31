import PropTypes from "prop-types";
import "../components/TripStyles.css";

const TripData = (props) => {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.image} alt="image one" />
      </div>

      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
};

export default TripData;

TripData.propTypes = {
  image: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
};

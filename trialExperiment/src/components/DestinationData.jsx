import PropTypes from "prop-types";
import "../components/DestinationDataStyles.css";
const DestinationData = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="des-text">
          <h1>{props.heading}</h1>
          <p>{props.text}</p>
          <h2>{props.heading2}</h2>
          <p>{props.text2}</p>
        </div>

        <div className="image">
          <img src={props.img1} alt="destination one" />
          <img src={props.img2} alt="destination two" />
        </div>
      </div>
    </>
  );
};

DestinationData.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  heading2: PropTypes.string,
  text2: PropTypes.string,
  img1: PropTypes.object,
  img2: PropTypes.object,
};

export default DestinationData;

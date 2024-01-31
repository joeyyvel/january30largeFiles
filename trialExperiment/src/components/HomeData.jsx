import PropTypes from "prop-types";
import "./HomeDataStyles.css";

const HomeData = (props) => {
  const handleClick = () => {
    alert("hello im the button");
  };

  return (
    <>
      <div className={props.allCName}>
        <img src={props.homeImage} alt="homeImage" className="homePicture" />

        <div className="home-text">
          <h1>{props.tittle}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass} onClick={handleClick}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
};

HomeData.propTypes = {
  allCName: PropTypes.string,
  homeImage: PropTypes.any,
  tittle: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string,
  btnClass: PropTypes.submit,
  buttonText: PropTypes.string,
};

export default HomeData;

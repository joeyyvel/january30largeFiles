import PropTypes from "prop-types";
import "../components/SignInStyles.css";

const SignInData = (props) => {
  const handleClick = () => {
    alert("Hello button");
  };

  return (
    <div className="container">
      <div className="enroll">
        <h6 id="enrollData">First Name</h6>
        <input placeholder="name :">{props.firstName}</input>
        <h6 id="enrollData">Last Name</h6>
        <input placeholder="surname :">{props.lastName}</input>
        <h6 id="enrollData">Email</h6>
        <input placeholder="email :">{props.email}</input>
        <h6 id="enrollData">Password</h6>
        <input placeholder="password :">{props.password}</input>
        <h6 id="enrollData">Confirm password</h6>
        <input placeholder="confirm password :">{props.confirmPassword}</input>
      </div>
      <p id="btn" onClick={handleClick}>
        Button
      </p>
    </div>
  );
};

SignInData.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  confirmPassword: PropTypes.string,
};

export default SignInData;

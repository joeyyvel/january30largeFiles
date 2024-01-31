import HomeData from "../components/HomeData";
import SignIn from "../components/SignIn";
import signUpPhoto from "../images/signUp.jpg";
const SignUp = () => {
  return (
    <>
      <HomeData allCName="home-aboutPage" homeImage={signUpPhoto} />
      <SignIn />
    </>
  );
};

export default SignUp;

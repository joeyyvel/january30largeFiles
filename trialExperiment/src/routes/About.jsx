import AboutUs from "../components/AboutUs";
import HomeData from "../components/HomeData";
import aboutPhoto from "../images/mountain.jpg";

const About = () => {
  return (
    <>
      <HomeData
        allCName="home-aboutPage"
        homeImage={aboutPhoto}
        tittle="about page"
        btnClass="hide"
      />
      <AboutUs />
    </>
  );
};

export default About;

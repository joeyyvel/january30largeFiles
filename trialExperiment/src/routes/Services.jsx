import HomeData from "../components/HomeData";
import servicesPhoto from "../images/Services.jpg";
import ServiceData from "../components/ServiceData";
import Trip from "../components/Trip";

const Services = () => {
  return (
    <>
      <HomeData
        allCName="home-aboutPage"
        homeImage={servicesPhoto}
        tittle="all about Services"
      />
      <ServiceData />
      <Trip />
    </>
  );
};

export default Services;

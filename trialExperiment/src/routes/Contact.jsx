import ContactData from "../components/ContactData";
import HomeData from "../components/HomeData";
import contactPhoto from "../images/contact.jpg";
const Contact = () => {
  return (
    <>
      <HomeData
        allCName="home-aboutPage"
        homeImage={contactPhoto}
        tittle="all about contacts"
        btnClass="hide"
      />
      <ContactData />
    </>
  );
};

export default Contact;

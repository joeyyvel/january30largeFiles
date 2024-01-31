import Destination from "../components/Destination";
import HomeData from "../components/HomeData";

const Home = () => {
  return (
    <>
      <HomeData
        className="allCName"
        homeImage="https://images.unsplash.com/photo-1571115945052-5dbe179c8200?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        tittle="Enjoy your travel"
        text="Choose your favorite destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
    </>
  );
};

export default Home;

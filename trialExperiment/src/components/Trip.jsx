import TripData from "./TripData";
import picOne from "../images/pic1.jpg";
import picTwo from "../images/pic2.jpg";
import picThree from "../images/pic3.jpg";

const Trip = () => {
  return (
    <>
      <div className="trip">
        <h1>Recent Trips</h1>
        <p>You can discover unique destination</p>
        <div className="tripCard">
          <TripData
            image={picOne}
            heading="trip in Philippines"
            text="  Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Dicta itaque aspernatur velit laudantium. At, tempora magni
            temporibus labore praesentium vitae minima cumque. Vel sunt 
            repellendus soluta repudiandae aliquid, consectetur harum earum 
            voluptates vero fugiat magnam natus eius maxime veritatis,
             quod perspiciatis sapiente hic eligendi tempora totam. 
             Incidunt fugiat sapiente nihil."
          />
          <TripData
            image={picTwo}
            heading="trip in South Korea"
            text="  Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dicta itaque aspernatur velit laudantium. At, tempora magni
           temporibus labore praesentium vitae minima cumque. Vel sunt 
           repellendus soluta repudiandae aliquid, consectetur harum earum 
           voluptates vero fugiat magnam natus eius maxime veritatis,
            quod perspiciatis sapiente hic eligendi tempora totam. 
            Incidunt fugiat sapiente nihil."
          />
          <TripData
            image={picThree}
            heading="trip in Japan"
            text="  Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dicta itaque aspernatur velit laudantium. At, tempora magni
           temporibus labore praesentium vitae minima cumque. Vel sunt 
           repellendus soluta repudiandae aliquid, consectetur harum earum 
           voluptates vero fugiat magnam natus eius maxime veritatis,
            quod perspiciatis sapiente hic eligendi tempora totam. 
            Incidunt fugiat sapiente nihil."
          />
        </div>
      </div>
    </>
  );
};

export default Trip;

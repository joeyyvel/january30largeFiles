import DestinationData from "./DestinationData";
import pic1 from "../images/image1.jpg";
import pic2 from "../images/image2.png";
import pic3 from "../images/image3.jpg";
import pic4 from "../images/image4.jpg";

const Destination = () => {
  return (
    <div className="destination">
      <h1 className="popDestination">Popular Destination </h1>
      <p className="paraDestination">Tours give you the opportunity</p>

      <DestinationData
        className="first-des"
        heading="Heading of joey"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
      cupiditate suscipit quo recusandae accusamus, nemo dolore! Consectetur
      vitae vel est temporibus non ullam vero neque fuga ipsum! Natus
      temporibus, saepe quae ducimus praesentium pariatur recusandae cumque
      eaque rem officiis quia, provident dicta. Illum ipsum beatae alias quae
      molestias sit rem!"
        heading2="Check this places"
        text2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
       cupiditate suscipit quo recusandae accusamus, nemo dolore! Consectetur
       vitae vel est temporibus non ullam vero neque fuga ipsum! Natus
       temporibus, saepe quae ducimus praesentium pariatur recusandae cumque
       eaque rem officiis quia, provident dicta. Illum ipsum beatae alias quae
       molestias sit rem!"
        img1={pic1}
        img2={pic2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Heading of joey"
        text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, fuga
       amet sit maiores nihil delectus ratione rerum aperiam magnam autem ut
       laborum vero. Aut ipsa quaerat repellat quis cumque aspernatur
       reiciendis blanditiis quam doloremque labore est nisi consequuntur
       deleniti itaque aliquid repudiandae ex, architecto velit, nulla
       inventore non officia. Itaque quod magnam ab animi quasi odio, beatae
       nemo architecto est?"
        heading2="Check this place"
        text2=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe quasi
       voluptate eius qui, odio dignissimos odit voluptatum provident esse
       ullam eligendi sequi quidem molestias repellendus mollitia, alias
       consequuntur, labore nisi? Hic vero magni officia aliquid asperiores
       harum iure eaque! Dolorum ratione porro ad in nesciunt."
        img1={pic3}
        img2={pic4}
      />
    </div>
  );
};

export default Destination;

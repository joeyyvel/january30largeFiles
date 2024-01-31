import "../components/ContactDataStyle.css";

const ContactData = () => {
  return (
    <div className="form-container">
      <h1>Send a message to us</h1>
      <form action="">
        <input placeholder="Name:" />
        <input placeholder="Name:" />
        <input placeholder="Name:" />
        <textarea placeholder="Message" rows="4"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
};

export default ContactData;

import { useState } from "react";
import { FaEnvelope, FaUser, FaPhone } from "react-icons/fa";
import emailjs from "emailjs-com";
import "./css/Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_u9pr8fb', 'template_zjocnut', e.target, 'mSRiZm70qJxQrUZxi')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="tte">Contacanos</h1>
        <label>
          <FaUser />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            name="Name"
          />
        </label>
        <label>
          <FaEnvelope />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          <FaPhone />
          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <label>
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            name="message"
          ></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;

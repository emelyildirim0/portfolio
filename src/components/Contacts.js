import { useState } from "react";
import emailjs from "emailjs-com";
import "../css/Contact.css";

function Contacts({ t }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success | error | null

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs
      .send(
        "service_dj3wl9b", // <-- EmailJS Service ID
        "template_okl546p", // <-- EmailJS Template ID
        {
          name: name,
          email: email,
          message: message,
        },
        "kEYiaq174i8GxKAI-" // <-- EmailJS Public Key
      )
      .then(
        () => {
          setStatus("success");
          setName("");
          setEmail("");
          setMessage("");
          setLoading(false);
        },
        (error) => {
          setStatus("error");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className={loading ? "loading" : ""}>
      <h2>{t.contact}</h2>
      <form onSubmit={sendEmail}>
        <div>
          <label>{t.contName}</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>{t.contMail}</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>{t.contMessage}</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button className="primary-button" type="submit" disabled={loading}>
          {loading ? t.contBtn1 : t.contBtn2}
        </button>
      </form>
      {status === "success" && (
        <p className="success-message">✅ {t.contSuccess}</p>
      )}
      {status === "error" && <p className="error-message">❌{t.contError} </p>}
    </section>
  );
}

export default Contacts;

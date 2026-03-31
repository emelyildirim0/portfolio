import "../css/Contact.css";

function Contacts() {
  const email = "info@emelyildirim.com";
  return (
    <section id="contact">
      <h2>İletişim</h2>
      <p>
        E-posta: <a href={`mailto:${email}`}>{email}</a>
      </p>
    </section>
  );
}

export default Contacts;

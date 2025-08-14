import "../css/Footer.css";
function Footer({ props }) {
  return (
    <footer>
      <p>
        &copy; {props.year} {props.footer}
      </p>
    </footer>
  );
}
export default Footer;

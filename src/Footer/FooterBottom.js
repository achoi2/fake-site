import logo from "../assets/logo.png";

function FooterBottom() {
  return (
    <div className="row">
      <hr />
      <div className="footerbottom">
        <img src={logo} alt="logo" />
        <div className="footerbottom-links">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Site Map</a>
        </div>
      </div>
    </div>
  );
}

export default FooterBottom;

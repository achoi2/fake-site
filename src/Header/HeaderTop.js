import logo from "../assets/logo.png";

function HeaderTop() {
  return (
    <div className="row">
      <div className="headertop">
        <img src={logo} alt="logo" />
        <div className="headertop-links">
          <a href="#">Account</a>
          <a href="#">Help</a>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;

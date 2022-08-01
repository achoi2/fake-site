import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <HeaderTop />
      <HeaderBottom />
    </div>
  );
}

export default Header;

import "./Header.scss";
import Login from "./Login";
import Menu from "./Menu";

const Header = () => {
  return (
    <div className="header-container">
      <Menu />
      <Login />
    </div>
  );
};

export default Header;

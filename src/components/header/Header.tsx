import { useState } from "react";
import "./Header.scss";
import Login from "./Login";
import Menu from "./Menu";
import ListMenu from "./ListMenu";

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const showMenuHandler = () => {
    setShowMenu((current) => !current);
  };

  const hiddenMenu = () => {
    setShowMenu(false);
  };
  return (
    <div className="header-container">
      <Menu handler={showMenuHandler} />
      {showMenu && <ListMenu hiddenMenu={hiddenMenu} />}
      <Login />
    </div>
  );
};

export default Header;

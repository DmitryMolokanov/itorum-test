import { FC } from "react";

interface MenuProps {
  handler: () => void;
}

const Menu: FC<MenuProps> = ({ handler }) => {
  return (
    <div className="header-btn-container">
      <button className="header-btn" onClick={handler}>
        Menu
      </button>
    </div>
  );
};

export default Menu;

import { FC } from "react";
import { ClickAwayListener } from "@mui/material";
import { useAppSelector } from "../../hooks/redux";
import { Link } from "react-router-dom";

interface ListMenuProps {
  hiddenMenu: () => void;
}

const ListMenu: FC<ListMenuProps> = ({ hiddenMenu }) => {
  const { isAuth } = useAppSelector((state) => state.AuthReducer);
  return (
    <ClickAwayListener onClickAway={hiddenMenu}>
      <div className="menu-list">
        <nav>
          <ul>
            <li>
              <Link to="/">Main page</Link>
            </li>
            <li>
              <Link to="/purcase" className={!isAuth ? "disabled-link" : ""}>
                Purchases
              </Link>
            </li>
            <li>
              <Link to="/favorites" className={!isAuth ? "disabled-link" : ""}>
                Favorites
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </ClickAwayListener>
  );
};

export default ListMenu;

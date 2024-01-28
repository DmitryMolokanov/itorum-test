import { FC } from "react";
import { ClickAwayListener } from "@material-ui/core";
import { useAppSelector } from "../../hooks/redux";

interface ListMenuProps {
  hiddenMenu: () => void;
}

const ListMenu: FC<ListMenuProps> = ({ hiddenMenu }) => {
  const { isAuthenticated } = useAppSelector((state) => state.AuthReducer);
  return (
    <ClickAwayListener onClickAway={hiddenMenu}>
      <div className="menu-list">
        <ul>
          <li>
            <a href="/">Main page</a>
          </li>
          <li>
            <a
              href="/purcase"
              className={!isAuthenticated ? "disabled-link" : ""}
            >
              Purchases
            </a>
          </li>
          <li>
            <a
              href="/favorites"
              className={!isAuthenticated ? "disabled-link" : ""}
            >
              Favorites
            </a>
          </li>
        </ul>
      </div>
    </ClickAwayListener>
  );
};

export default ListMenu;

import { FC } from "react";
import { IComics } from "../../../types";
import { ClickAwayListener } from "@mui/material";
import { Link } from "react-router-dom";

interface SearchListProps {
  valueSearch: string;
  setValueSearch: (el: string) => void;
  findedComics: IComics[];
}

const SearchList: FC<SearchListProps> = ({
  valueSearch,
  findedComics,
  setValueSearch,
}) => {
  const hiddenList = () => {
    setValueSearch("");
  };

  return (
    <div
      className="comics-list"
      style={valueSearch ? { display: "block" } : { display: "none" }}
    >
      {valueSearch !== ""
        ? findedComics.map((item) => {
            return (
              <ClickAwayListener onClickAway={hiddenList}>
                <nav>
                  <Link to={`/${item.id}`} key={item.id}>
                    <div className="list-item" key={item.id}>
                      {item.title}
                    </div>
                  </Link>
                </nav>
              </ClickAwayListener>
            );
          })
        : null}
    </div>
  );
};

export default SearchList;

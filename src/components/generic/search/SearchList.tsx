import { FC } from "react";
import { IComics } from "../../../types";

interface SearchListProps {
  valueSearch: string;
  findedComics: IComics[];
}

const SearchList: FC<SearchListProps> = ({ valueSearch, findedComics }) => {
  return (
    <div
      className="comics-list"
      style={valueSearch ? { display: "block" } : { display: "none" }}
    >
      {valueSearch !== ""
        ? findedComics.map((item) => {
            return (
              <a href={`/${item.id}`} key={item.id}>
                <div className="list-item" key={item.id}>
                  {item.title}
                </div>
              </a>
            );
          })
        : null}
    </div>
  );
};

export default SearchList;

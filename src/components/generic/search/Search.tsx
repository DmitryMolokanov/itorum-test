import React, { useEffect, useState, FC } from "react";
import { IComics } from "../../../types";
import SearchList from "./SearchList";

interface SearchProps {
  comics: Array<IComics>;
}

const Search: FC<SearchProps> = ({ comics }) => {
  const [valueSearch, setValueSearch] = useState<string>("");
  const [findedComics, setFindedComics] = useState<Array<IComics>>([]);

  useEffect(() => {
    const finded = comics.filter((item) => {
      return item.title
        .toLocaleLowerCase()
        .includes(valueSearch.toLocaleLowerCase());
    });
    setFindedComics(finded);
  }, [valueSearch, comics]);

  return (
    <div className="header-search-container">
      <input
        type="text"
        placeholder="Seach comics"
        value={valueSearch}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValueSearch(e.target.value);
        }}
      />
      <SearchList
        valueSearch={valueSearch}
        setValueSearch={setValueSearch}
        findedComics={findedComics}
      />
    </div>
  );
};

export default Search;

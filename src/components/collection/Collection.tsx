import { FC } from "react";
import "./Collection.scss";
import { IComics } from "../../types";
import CoverComics from "./CoverComics";
import TitleComix from "./TitleComix";
import ComicsCard from "./ComicsCard";

interface CollectionProps {
  comics: IComics[];
  page: IComics[];
}

const Collection: FC<CollectionProps> = ({ comics, page }) => {
  return (
    <div className="collection-container">
      {page
        ? page.map((el: IComics) => {
            return <ComicsCard el={el} />;
          })
        : comics.slice(1, 10).map((el: IComics) => {
            return <ComicsCard el={el} />;
          })}
    </div>
  );
};

export default Collection;

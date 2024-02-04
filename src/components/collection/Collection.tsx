import { FC } from "react";
import "./Collection.scss";
import { IComics } from "../../types";
import ComicsCard from "./ComicsCard";

interface CollectionProps {
  comics: IComics[];
  page?: IComics[];
}

const Collection: FC<CollectionProps> = ({ comics, page }) => {
  return (
    <div className="collection-container">
      {comics.map((el: IComics) => {
        return <ComicsCard el={el} key={el.id} />;
      })}
    </div>
  );
};

export default Collection;

import { FC } from "react";
import "./Collection.scss";
import { IComics } from "../../types";
import CoverComics from "./CoverComics";
import TitleComix from "./TitleComix";

interface CollectionProps {
  comics: Array<IComics>;
}

const Collection: FC<CollectionProps> = ({ comics }) => {
  return (
    <div className="collection-container">
      {comics.map((el: IComics) => {
        return (
          <a href={`/${el.id}`} key={el.id}>
            <div className="comics">
              <CoverComics link={el} />
              <TitleComix title={el.title} />
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default Collection;

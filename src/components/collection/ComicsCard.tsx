import { IComics } from "../../types";
import CoverComics from "./CoverComics";
import TitleComix from "./TitleComix";
import { FC } from "react";

interface ComicsCardProps {
  el: IComics;
}

const ComicsCard: FC<ComicsCardProps> = ({ el }) => {
  return (
    <a href={`/${el.id}`} key={el.id}>
      <div className="comics">
        <CoverComics link={el} />
        <TitleComix title={el.title} />
      </div>
    </a>
  );
};

export default ComicsCard;

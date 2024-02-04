import { IComics } from "../../types";
import CoverComics from "./CoverComics";
import TitleComix from "./TitleComix";
import { FC } from "react";
import { Link } from "react-router-dom";

interface ComicsCardProps {
  el: IComics;
}

const ComicsCard: FC<ComicsCardProps> = ({ el }) => {
  return (
    <Link to={`/${el.id}`}>
      <div className="comics">
        <CoverComics link={el} />
        <TitleComix title={el.title} />
      </div>
    </Link>
  );
};

export default ComicsCard;

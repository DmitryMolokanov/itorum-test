import { FC } from "react";
import { IComics } from "../../types";

interface CoverComicsProps {
  link: IComics;
}

const CoverComics: FC<CoverComicsProps> = ({ link }) => {
  return (
    <img
      src={
        link.thumbnail.path + "/portrait_incredible." + link.thumbnail.extension
      }
      alt={`img ${link.title}`}
    />
  );
};

export default CoverComics;

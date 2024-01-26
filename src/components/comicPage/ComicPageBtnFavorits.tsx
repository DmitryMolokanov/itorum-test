import { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IComics } from "../../types";
import { useAppSelector } from "../../hooks/redux";

interface ComicPageBtnFavoritsProps {
  handlerAdd: (id: number) => void;
  handlerRemove: (id: number) => void;
  comic: IComics;
}

const ComicPageBtnFavorits: FC<ComicPageBtnFavoritsProps> = ({
  handlerAdd,
  handlerRemove,
  comic,
}) => {
  const [favorites, setFavorites] = useState(comic.favorites || false);
  const params = useParams();
  const { isAuthenticated } = useAppSelector((state) => state.AuthReducer);

  useEffect(() => {
    if (!comic.favorites) {
      setFavorites(true);
    } else setFavorites(false);
  }, [comic.favorites]);

  return (
    <div>
      {favorites ? (
        <button
          onClick={() => handlerAdd(+params.id!)}
          disabled={!isAuthenticated}
        >
          Add to favorites
        </button>
      ) : (
        <button
          onClick={() => handlerRemove(+params.id!)}
          disabled={!isAuthenticated}
        >
          Remove from favorites
        </button>
      )}
    </div>
  );
};

export default ComicPageBtnFavorits;

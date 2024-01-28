import { FC, useState, useEffect } from "react";
import { IComics } from "../../types";
import { useAppSelector } from "../../hooks/redux";
import FavoritesBtn from "./FavoritesBtn";

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
  const { isAuthenticated } = useAppSelector((state) => state.AuthReducer);

  useEffect(() => {
    if (!comic.favorites) {
      setFavorites(true);
    } else setFavorites(false);
  }, [comic.favorites]);

  return (
    <div>
      {favorites ? (
        <FavoritesBtn handler={handlerAdd} isAuthenticated={isAuthenticated}>
          Add to favorites
        </FavoritesBtn>
      ) : (
        <FavoritesBtn handler={handlerRemove} isAuthenticated={isAuthenticated}>
          Remove from favorites
        </FavoritesBtn>
      )}
    </div>
  );
};

export default ComicPageBtnFavorits;

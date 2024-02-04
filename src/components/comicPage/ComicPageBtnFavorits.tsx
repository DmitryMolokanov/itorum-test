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
  const [isFavorites, setIsFavorites] = useState(false);
  const { favorites } = useAppSelector((state) => state.ComicsReducer);
  const { isAuth } = useAppSelector((state) => state.AuthReducer);

  useEffect(() => {
    const findComic = favorites.find((item) => item.id === comic.id);
    if (findComic) {
      setIsFavorites(true);
    } else setIsFavorites(false);
  }, [favorites, comic]);

  return (
    <div>
      {!isFavorites ? (
        <FavoritesBtn handler={handlerAdd} isAuth={isAuth}>
          Add to favorites
        </FavoritesBtn>
      ) : (
        <FavoritesBtn handler={handlerRemove} isAuth={isAuth}>
          Remove from favorites
        </FavoritesBtn>
      )}
    </div>
  );
};

export default ComicPageBtnFavorits;

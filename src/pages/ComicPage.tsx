import { useAppSelector, useAppDispatch } from "../hooks/redux";
import { useEffect, useState } from "react";
import {
  addFavorites,
  buyComic,
  removeFavorites,
} from "../store/reducers/comics/ComicsCreators";
import { useParams } from "react-router-dom";
import Header from "../components/header/Header";
import CoverComics from "../components/collection/CoverComics";
import { IComics } from "../types";
import "../components/comicPage/comicPage.scss";
import TitleComix from "../components/collection/TitleComix";
import DescriptionComicsPage from "../components/comicPage/DescriptionComicsPage";
import ComicPageBtn from "../components/comicPage/ComicPageBtnBuy";
import ComicPageBtnFavorits from "../components/comicPage/ComicPageBtnFavorits";
import FavoritesBtn from "../components/comicPage/FavoritesBtn";

const ComicPage = () => {
  const { comics } = useAppSelector((state) => state.ComicsReducer);

  const [comic, setComic] = useState<IComics | undefined>(undefined);
  const isAuth = useAppSelector((state) => state.AuthReducer.isAuth);

  const params = useParams();
  const dispatch = useAppDispatch();

  const buy = (id: number) => {
    dispatch(buyComic(id));
  };

  const setFavorites = (id: number) => {
    dispatch(addFavorites(id));
  };

  const removeFavorite = (id: number) => {
    dispatch(removeFavorites(id));
  };

  useEffect(() => {
    if (comics.length > 0 && params.id) {
      const filteredComic = comics.find((el) => el.id === +params.id!);
      setComic(filteredComic);
    }
  }, [comics, params.id]);

  return (
    <div>
      <Header />
      {comic !== undefined && (
        <div className="comic-container">
          <CoverComics link={comic} />
          <div className="comic-discription-container">
            <TitleComix title={comic.title} />
            <DescriptionComicsPage description={comic.description} />
            <div className="comic-options-container">
              <span className="comic-options-price">{`Price: ${comic.prices[0].price}`}</span>

              <div className="comic-options-buttons">
                {isAuth ? <ComicPageBtn handler={buy} comic={comic} /> : null}

                {isAuth ? (
                  <ComicPageBtnFavorits
                    handlerAdd={setFavorites}
                    handlerRemove={removeFavorite}
                    comic={comic}
                  />
                ) : (
                  <FavoritesBtn isAuth={isAuth}>Add to favorites</FavoritesBtn>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComicPage;

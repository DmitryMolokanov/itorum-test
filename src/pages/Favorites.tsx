import { useAppSelector } from "../hooks/redux";
import Header from "../components/header/Header";
import Search from "../components/generic/search/Search";
import Collection from "../components/collection/Collection";
import { useEffect, useState } from "react";
import { IComics } from "../types";
import PageTitle from "../components/generic/PageTitle";
import Pagination from "../components/generic/Pagination";
import Footer from "../components/generic/Footer";

const Favorites = () => {
  const { comics } = useAppSelector((state) => state.ComicsReducer);
  const [favorites, setFavorites] = useState<Array<IComics>>([]);
  const [page, setPage] = useState<IComics[]>([]);

  useEffect(() => {
    const collectionFavorites = comics.filter((item) => {
      return item.favorites === true;
    });
    setFavorites(collectionFavorites);
    setPage(collectionFavorites);
  }, [comics]);

  return (
    <div>
      <Header />
      <Search comics={comics} />
      <PageTitle>Favorite comics</PageTitle>
      <Collection comics={favorites} page={page} />
      <Pagination comics={favorites} page={setPage} />
      <Footer />
    </div>
  );
};

export default Favorites;

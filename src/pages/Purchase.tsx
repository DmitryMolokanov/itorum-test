import { useEffect, useState } from "react";
import { useAppSelector } from "../hooks/redux";
import { IComics } from "../types";
import Header from "../components/header/Header";
import Search from "../components/generic/search/Search";
import PageTitle from "../components/generic/PageTitle";
import Collection from "../components/collection/Collection";
import Pagination from "../components/generic/Pagination";
import Footer from "../components/generic/Footer";
import { favoriteComic } from "../store/reducers/ActionCreators";

const Purchase = () => {
  const { comics } = useAppSelector((state) => state.ComicsReducer);
  const [purchase, setPurchase] = useState<Array<IComics>>([]);
  const [page, setPage] = useState<IComics[]>([]);

  useEffect(() => {
    const collectionFavorites = comics.filter((item) => {
      return item.bought === true;
    });
    setPurchase(collectionFavorites);
    setPage(collectionFavorites);
  }, [comics]);

  return (
    <div>
      <Header />
      <Search comics={comics} />
      <PageTitle>Purchased comics</PageTitle>
      <Collection comics={purchase} page={page} />
      <Pagination comics={purchase} page={setPage} />
      <Footer />
    </div>
  );
};

export default Purchase;

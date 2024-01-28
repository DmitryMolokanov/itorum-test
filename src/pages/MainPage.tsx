import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Collection from "../components/collection/Collection";
import Error from "../components/generic/Error";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { getComics } from "../store/reducers/ActionCreators";
import Loading from "../components/generic/Loading";
import Search from "../components/generic/search/Search";
import Pagination from "../components/generic/Pagination";
import Footer from "../components/generic/Footer";
import { IComics } from "../types";

const MainPage = () => {
  const dispatch = useAppDispatch();
  const { comics, isLoading, error } = useAppSelector(
    (state) => state.ComicsReducer
  );
  const [page, setPage] = useState<IComics[]>([]);

  useEffect(() => {
    dispatch(getComics());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Search comics={comics} />
      {isLoading && <Loading />}
      {error && <Error />}
      <Collection comics={comics} page={page} />
      <Pagination comics={comics} page={setPage} />
      <Footer />
    </div>
  );
};

export default MainPage;

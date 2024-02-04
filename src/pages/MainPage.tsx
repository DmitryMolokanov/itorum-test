import { useEffect } from "react";
import Header from "../components/header/Header";
import Error from "../components/generic/Error";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { ComicsCreators } from "../store/reducers/comics/ComicsCreators";
import Loading from "../components/generic/Loading";
import Search from "../components/generic/search/Search";
import Footer from "../components/generic/Footer";
import PaginationCollection from "../components/generic/Pagination";

const MainPage = () => {
  const dispatch = useAppDispatch();
  const { comics, isLoading, error } = useAppSelector(
    (state) => state.ComicsReducer
  );

  useEffect(() => {
    if (comics.length > 0) return;
    dispatch(ComicsCreators());
  }, [dispatch, comics]);

  return (
    <div>
      <Header />
      <Search comics={comics} />
      {isLoading && <Loading />}
      {error && <Error />}
      <PaginationCollection comics={comics} />
      <Footer />
    </div>
  );
};

export default MainPage;

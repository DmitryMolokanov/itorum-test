import { useEffect } from "react";
import Header from "../components/header/Header";
import Collection from "../components/collection/Collection";
import Error from "../components/generic/Error";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { getComics } from "../store/reducers/ActionCreators";
import Loading from "../components/generic/Loading";
import Search from "../components/generic/search/Search";

const MainPage = () => {
  const dispatch = useAppDispatch();
  const { comics, isLoading, error } = useAppSelector(
    (state) => state.ComicsReducer
  );

  useEffect(() => {
    dispatch(getComics());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Search comics={comics} />
      {isLoading && <Loading />}
      {error && <Error />}
      <Collection comics={comics} />
    </div>
  );
};

export default MainPage;

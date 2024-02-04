import { useAppSelector } from "../hooks/redux";
import Header from "../components/header/Header";
import Search from "../components/generic/search/Search";
import PageTitle from "../components/generic/PageTitle";
import Footer from "../components/generic/Footer";
import PaginationCollection from "../components/generic/Pagination";

const Favorites = () => {
  const { favorites } = useAppSelector((state) => state.ComicsReducer);

  return (
    <div>
      <Header />
      <Search comics={favorites} />
      <PageTitle>Favorite comics</PageTitle>
      <PaginationCollection comics={favorites} />
      <Footer />
    </div>
  );
};

export default Favorites;

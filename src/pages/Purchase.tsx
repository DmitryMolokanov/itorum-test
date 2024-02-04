import { useAppSelector } from "../hooks/redux";
import Header from "../components/header/Header";
import Search from "../components/generic/search/Search";
import PageTitle from "../components/generic/PageTitle";
import Footer from "../components/generic/Footer";
import PaginationCollection from "../components/generic/Pagination";

const Purchase = () => {
  const { purchases } = useAppSelector((state) => state.ComicsReducer);

  return (
    <div>
      <Header />
      <Search comics={purchases} />
      <PageTitle>Purchased comics</PageTitle>
      <PaginationCollection comics={purchases} />
      <Footer />
    </div>
  );
};

export default Purchase;

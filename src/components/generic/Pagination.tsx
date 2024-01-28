import { FC, useEffect, useState } from "react";
import { IComics } from "../../types";

interface PaginationProps {
  comics: IComics[];
  page: (el: IComics[]) => void;
}

const Pagination: FC<PaginationProps> = ({ comics, page }) => {
  const [curPage, setCurPage] = useState<number>(1);

  const totalPages = () => {
    let arr: Array<IComics[]> = [];
    const size = 10;
    for (let i = 0; i < comics.length; i += size) {
      arr.push(comics.slice(i, i + size));
    }
    return arr;
  };
  const paginationArr = totalPages();

  useEffect(() => {
    totalPages();
    page(paginationArr[0]);
  }, []);

  const pageHandler = (el: Array<IComics>, index: number) => {
    setCurPage(index + 1);
    page(el);
  };

  return (
    <div className="pagination">
      {paginationArr.map((el, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              pageHandler(el, index);
            }}
            className={curPage === index + 1 ? "active-btn" : "btn"}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;

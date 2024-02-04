import { Pagination } from "@mui/material";
import { IComics } from "../../types";
import { useState, FC, useEffect } from "react";
import Collection from "../collection/Collection";

interface PaginationCollectionProps {
  comics: IComics[];
}

const PaginationCollection: FC<PaginationCollectionProps> = ({ comics }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(comics.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentComics = comics.slice(startIndex, endIndex);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <Collection comics={currentComics} />

      {totalPages > 1 ? (
        <Pagination
          count={totalPages}
          page={currentPage}
          className="pagination"
          onChange={handleChangePage}
        />
      ) : null}
    </div>
  );
};
export default PaginationCollection;

import { FC, useEffect, useState } from "react";
import { IComics } from "../../types";
import { useParams } from "react-router-dom";
import BoughtTable from "./BoughtTable";

interface ComicPageBtnProps {
  handler: (id: number) => void;
  comic: IComics;
}

const ComicPageBtn: FC<ComicPageBtnProps> = ({ handler, comic }) => {
  const [btnDisabled, setDisabled] = useState(false);
  const params = useParams();

  useEffect(() => {
    if (+comic.prices[0].price === 0) setDisabled(true);
  }, [comic.prices]);

  return (
    <div>
      {comic.bought ? (
        <BoughtTable />
      ) : (
        <button onClick={() => handler(+params.id!)} disabled={btnDisabled}>
          Buy
        </button>
      )}
    </div>
  );
};

export default ComicPageBtn;

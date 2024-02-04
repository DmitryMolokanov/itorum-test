import { FC, useEffect, useState } from "react";
import { IComics } from "../../types";
import { useParams } from "react-router-dom";
import BoughtTable from "./BoughtTable";
import { useAppSelector } from "../../hooks/redux";

interface ComicPageBtnProps {
  handler: (id: number) => void;
  comic: IComics;
}

const ComicPageBtn: FC<ComicPageBtnProps> = ({ handler, comic }) => {
  const { purchases } = useAppSelector((state) => state.ComicsReducer);
  const [btnDisabled, setDisabled] = useState(false);
  const [isBought, setIsBought] = useState(false);

  const params = useParams();

  useEffect(() => {
    if (+comic.prices[0].price === 0) setDisabled(true);
    const boughtComic = purchases.find((item) => item.id === comic.id);
    if (boughtComic) setIsBought(true);
  }, [comic, purchases]);

  return (
    <div>
      {isBought ? (
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

import { FC } from "react";
import { useParams } from "react-router-dom";
import { Tooltip } from "@mui/material";
import TooltipAuth from "./TooltipAuth";

interface FavoritesBtnProps {
  isAuth: boolean;
  handler?: (id: number) => void;
  children: React.ReactNode;
}

const FavoritesBtn: FC<FavoritesBtnProps> = ({ isAuth, handler, children }) => {
  const params = useParams();

  return (
    <div>
      <Tooltip title={!isAuth ? <TooltipAuth /> : ""} arrow>
        <button
          onClick={() => {
            if (handler) handler(+params.id!);
          }}
          disabled={!isAuth}
        >
          {children}
        </button>
      </Tooltip>
    </div>
  );
};

export default FavoritesBtn;

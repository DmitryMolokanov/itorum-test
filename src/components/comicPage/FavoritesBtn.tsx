import { FC } from "react";
import { useParams } from "react-router-dom";
import { Tooltip } from "@material-ui/core";
import TooltipAuth from "./TooltipAuth";

interface FavoritesBtnProps {
  isAuthenticated: boolean;
  handler: (id: number) => void;
  children: React.ReactNode;
}

const FavoritesBtn: FC<FavoritesBtnProps> = ({
  isAuthenticated,
  handler,
  children,
}) => {
  const params = useParams();

  return (
    <div>
      <Tooltip title={!isAuthenticated ? <TooltipAuth /> : ""} arrow>
        <button
          onClick={() => handler(+params.id!)}
          disabled={!isAuthenticated}
        >
          {children}
        </button>
      </Tooltip>
    </div>
  );
};

export default FavoritesBtn;

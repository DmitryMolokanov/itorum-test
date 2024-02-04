import { FC } from "react";

interface modalBtnProps {
  handleLogin: (e: React.MouseEvent) => void;
}

const ModalBtn: FC<modalBtnProps> = ({ handleLogin }) => {
  return (
    <button
      type="submit"
      className="send-auth"
      onClick={(e: React.MouseEvent) => handleLogin(e)}
    >
      Login
    </button>
  );
};

export default ModalBtn;

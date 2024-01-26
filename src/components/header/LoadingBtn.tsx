import { FC } from "react";

interface LoadingBtnProps {
  activateModal: () => void;
}

const LoadingBtn: FC<LoadingBtnProps> = ({ activateModal }) => {
  return <button onClick={() => activateModal()}>Login</button>;
};

export default LoadingBtn;

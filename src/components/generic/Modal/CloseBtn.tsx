import React, { FC } from "react";

interface CloseBtnProps {
  closeModal: (e: React.MouseEvent) => void;
}

const CloseBtn: FC<CloseBtnProps> = ({ closeModal }) => {
  return (
    <button
      type="button"
      className="close-modal"
      onClick={(e) => {
        closeModal(e);
      }}
    >
      X
    </button>
  );
};

export default CloseBtn;

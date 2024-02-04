import { FC } from "react";

interface ModalLoginProps {
  value: string;
  changeHandler: (e: string) => void;
  children: React.ReactNode;
}

const ModalInput: FC<ModalLoginProps> = ({
  value,
  changeHandler,
  children,
}) => {
  return (
    <div>
      <label>{children}:</label>
      <input
        type="text"
        className="input-value"
        value={value}
        onChange={(e) => changeHandler(e.target.value)}
      />
    </div>
  );
};

export default ModalInput;

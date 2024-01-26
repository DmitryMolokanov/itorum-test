import { FC } from "react";

interface ModalInputProps {
  value: string;
  changeHandler: (e: string) => void;
  children: React.ReactNode;
}

const ModalInput: FC<ModalInputProps> = ({
  value,
  changeHandler,
  children,
}) => {
  return (
    <div>
      <label>{children}:</label>
      <input
        type="text"
        value={value}
        onChange={(e) => changeHandler(e.target.value)}
      />
    </div>
  );
};

export default ModalInput;

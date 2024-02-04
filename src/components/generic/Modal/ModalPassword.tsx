import { FC } from "react";

interface ModalPasswordProps {
  value: string;
  changeHandler: (e: string) => void;
  children: React.ReactNode;
  showPassword: boolean;
}

const ModalPassword: FC<ModalPasswordProps> = ({
  value,
  children,
  changeHandler,
  showPassword,
}) => {
  return (
    <div>
      <label>{children}:</label>
      <input
        className="input-value"
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={(e) => changeHandler(e.target.value)}
      />
    </div>
  );
};

export default ModalPassword;

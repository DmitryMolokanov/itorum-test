import { FC } from "react";

interface ShowPasswordProps {
  setShowPassword: (prev: any) => void;
  showPassword: boolean;
}

const ShowPassword: FC<ShowPasswordProps> = ({
  setShowPassword,
  showPassword,
}) => {
  return (
    <div>
      <label htmlFor="check">Show password</label>
      <input
        id="check"
        type="checkbox"
        checked={showPassword}
        readOnly
        onClick={() => {
          setShowPassword((prev: any) => !prev);
        }}
      />
    </div>
  );
};

export default ShowPassword;

import { FC, useEffect, useState } from "react";
import CloseBtn from "./CloseBtn";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { login, resetError } from "../../../store/reducers/auth/AuthCreatos";

import ModalBtn from "./ModalBtn";
import ModalPassword from "./ModalPassword";
import ModalLogin from "./ModalLogin";
import ShowPassword from "./ShowPassword";

interface ModalFormProps {
  isModal: boolean;
  setIsModal: (val: boolean) => void;
}

const ModalForm: FC<ModalFormProps> = ({ isModal, setIsModal }) => {
  const { isAuth, error } = useAppSelector((state) => state.AuthReducer);

  const dispatch = useAppDispatch();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const closeModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setUsername("");
    setPassword("");
    setShowPassword(false);
    setIsModal(false);
    dispatch(resetError());
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login(username, password));
    setUsername("");
    setPassword("");
  };

  useEffect(() => {
    if (isAuth) return setIsModal(false);
  }, [isAuth, setIsModal]);

  return (
    <div
      className="modal"
      style={isModal ? { display: "flex" } : { display: "none" }}
    >
      <form className="modal-form" onSubmit={(e) => handleLogin(e)}>
        {error ? <span className="modal-form-error">{error}</span> : null}

        <CloseBtn closeModal={closeModal} />

        <ModalLogin value={username} changeHandler={setUsername}>
          Username
        </ModalLogin>
        <br />

        <ModalPassword
          value={password}
          changeHandler={setPassword}
          showPassword={showPassword}
        >
          Password
        </ModalPassword>

        <ShowPassword
          setShowPassword={setShowPassword}
          showPassword={showPassword}
        />
        <br />

        <ModalBtn handleLogin={handleLogin} />
      </form>
    </div>
  );
};

export default ModalForm;

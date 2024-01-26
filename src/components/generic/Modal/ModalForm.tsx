import { FC, useEffect, useState } from "react";
import CloseBtn from "./CloseBtn";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { login } from "../../../store/reducers/AuthCreatos";
import ModalInput from "./ModalInput";
import ModalBtn from "./ModalBtn";

interface ModalFormProps {
  isModal: boolean;
  setIsModal: (val: boolean) => void;
}

const ModalForm: FC<ModalFormProps> = ({ isModal, setIsModal }) => {
  const { isAuthenticated, error } = useAppSelector(
    (state) => state.AuthReducer
  );

  const dispatch = useAppDispatch();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const closeModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModal(false);
  };

  const handleLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(login(username, password));
    setUsername("");
    setPassword("");
  };

  useEffect(() => {
    if (isAuthenticated) return setIsModal(false);
  }, [isAuthenticated, setIsModal]);

  return (
    <div
      className="modal"
      style={isModal ? { display: "flex" } : { display: "none" }}
    >
      <form className="modal-form">
        {error ? <span>{error}</span> : null}

        <CloseBtn closeModal={closeModal} />

        <ModalInput value={username} changeHandler={setUsername}>
          Username
        </ModalInput>
        <br />

        <ModalInput value={password} changeHandler={setPassword}>
          Password
        </ModalInput>
        <br />

        <ModalBtn handleLogin={handleLogin} />
      </form>
    </div>
  );
};

export default ModalForm;

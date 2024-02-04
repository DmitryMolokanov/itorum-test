import { useState } from "react";
import ModalForm from "../generic/Modal/ModalForm";
import LoadingBtn from "./LoadingBtn";
import { useAppSelector } from "../../hooks/redux";
import LogoutBtn from "./LogoutBtn";

const Login = () => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const { isAuth } = useAppSelector((state) => state.AuthReducer);

  const activateModal = () => {
    setIsModal(true);
  };

  return (
    <div className="header-auth-container">
      {isAuth ? <LogoutBtn /> : <LoadingBtn activateModal={activateModal} />}

      <ModalForm isModal={isModal} setIsModal={setIsModal} />
    </div>
  );
};

export default Login;

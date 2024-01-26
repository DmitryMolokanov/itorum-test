import { useAppDispatch } from "../../hooks/redux";
import { logout } from "../../store/reducers/AuthCreatos";

const LogoutBtn = () => {
  const dispatch = useAppDispatch();

  const logoutAuth = () => {
    dispatch(logout());
  };

  return <button onClick={() => logoutAuth()}>Logout</button>;
};

export default LogoutBtn;

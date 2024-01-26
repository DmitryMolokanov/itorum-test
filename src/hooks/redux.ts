import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatch, rootState } from "../store/store";
import { useSelector } from "react-redux";
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<rootState> = useSelector;

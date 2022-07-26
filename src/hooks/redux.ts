import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootSTate} from "../store";

export const useAppSelector:TypedUseSelectorHook<RootSTate> = useSelector
import { useContext } from "react";
import OverlayContext from "../context/OverlayContext";

const useOverlayContext = () => {
  return useContext(OverlayContext);
};

export default useOverlayContext;

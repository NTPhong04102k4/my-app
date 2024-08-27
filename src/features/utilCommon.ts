import { useNavigate } from "react-router-dom";
export interface selectPages {
  id: number;
  name: string;
  path: string;
}
const defaultPages = {
  id: 0,
  name: "Home",
  path: "/home",
};
export { defaultPages };
// save pages to localStoreage

export const LAST_SCREEN = "lastScreen";

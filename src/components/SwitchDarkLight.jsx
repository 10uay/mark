import { TbSunHigh } from "react-icons/tb";
import { AiOutlineMoon } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";


export default function SwitchDarkLight() {
  const { theme } = useSelector((state) => state.theme);

  const dispatch = useDispatch();

  return (
    <div>
      <div
        className=" text-[23px] hover:cursor-pointer"
        color="gray"
        onClick={() => dispatch(toggleTheme())}
      >
        {theme === "light" ? <AiOutlineMoon /> : <TbSunHigh />}
      </div>
    </div>
  );
}

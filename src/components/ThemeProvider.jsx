import { useSelector } from "react-redux";

export default function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={theme}>
      <div className=" bg-main_blue text-black dark:text-gray-200 dark:bg-main_dark">
        {children}
      </div>
    </div>
  );
}

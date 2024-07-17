import Logo from "./Logo";
import SwitchDarkLight from "./SwitchDarkLight";
import './NavBar.css'
import DashSideBar from './DashSideBar/DashSideBar'
import { Link } from "react-scroll";


export default function NavBar() {
  return (
    <div className="flex justify-between items-center py-2 md:px-8 px-3 font-serif md:mx-20">
      {/* logo */}
      <Logo />
      {/* <div className="text-3xl font-bold">Ollie</div> */}

      {/* list */}
      <ul className="hidden lg:flex justify-between items-center gap-10">
        <li>
          <Link to="services" smooth={true} duration={500}>
            Services
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>Why work with us?</li>
      </ul>

      {/* work together */}
      <div className=" underline flex justify-between items-center gap-7">
        <SwitchDarkLight />
        <div className="hover:cursor-pointer">
          <Link to="email" smooth={true} duration={500}>
            Let’s work together
          </Link>
        </div>
      </div>

      {/* dash sideBar */}
      <div className="lg:hidden relative w-14 h-14">
        <DashSideBar />
      </div>
    </div>
  );
}

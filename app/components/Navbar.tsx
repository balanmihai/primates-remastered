import Link from "next/link";
import Themebutton from "./ThemeButton";
import style from "../styles/Navbar.module.scss";

export default function Navbar() {
  return (
    <div className="z-50 bg-inherit sm:px-6 lg:px-8 sticky top-0">
      <div className=" max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex justify-between items-center w-full">
            <Link href="/">
              <h1 className="text-2xl font-medium">
                <span className={style.logo}>
                  <span className="text-teal-500">Primates</span>
                </span>
              </h1>
            </Link>
            <Themebutton />
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import Link from "next/link";
import Themebutton from "./ThemeButton";
import { TypeAnimation } from "react-type-animation";

export default function Navbar() {
  return (
    <div className="z-50 bg-inherit sm:px-6 lg:px-8 sticky top-0">
      <div className=" max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex justify-between items-center w-full">
            <Link href="/">
              <h1 className="text-2xl font-medium">
                eSol
                <span className="text-teal-500">
                  {" "}
                  <TypeAnimation
                    sequence={["Hikes", 2000, "Bikes", 2000, "Sails", 2000]}
                    speed={25}
                    repeat={Infinity}
                  />
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

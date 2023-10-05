import Link from "next/link";
import Themebutton from "./ThemeButton";

export default function Navbar() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 sticky top-0 bg-inherit">
      <div className="flex justify-between h-16">
        <div className="flex justify-between items-center w-full">
          <Link href="/">
            <h1 className="text-2xl font-medium">
              eSol <span className="text-teal-500">Hike</span>
            </h1>
          </Link>

          <Themebutton />
        </div>
      </div>
    </div>
  );
}
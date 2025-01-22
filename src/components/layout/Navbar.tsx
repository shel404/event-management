import { Bell } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="h-16 border-b border-gray-200 bg-white fixed w-full top-0 z-50">
      <div className="h-full px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/pulikidz-logo.png"
            alt="Logo"
            width={256}
            height={256}
            className="w-20 h-8"
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors relative">
            <Bell className="w-5 h-5 text-gray-600" />

            <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center">
              1
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

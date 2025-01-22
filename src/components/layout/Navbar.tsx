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
          <button className="text-gray-600 hover:text-primary">
            Notifications
          </button>
          <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
            <span className="text-6xl bg-primary text-white">A</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

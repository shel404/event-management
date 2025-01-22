"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Calendar, BookOpen, Menu } from "lucide-react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Events", href: "/events", icon: Calendar },
  { name: "Bookings", href: "/bookings", icon: BookOpen },
];

export default function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={`fixed top-20 ${
          isCollapsed ? "left-4" : "left-64"
        } z-50 p-2 bg-white rounded-lg shadow-md hover:bg-gray-50 md:hidden transition-all duration-300`}
      >
        <Menu className="w-5 h-5 text-gray-600" />
      </button>

      <aside
        className={`${
          isCollapsed ? "-translate-x-full" : "translate-x-0"
        } w-64 fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 transition-transform duration-300 z-40`}
      >
        <nav className="p-4">
          <ul className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-gray-700 hover:bg-primary/10 hover:text-primary"
                    }`}
                    onClick={() => isMobile && setIsCollapsed(true)}
                  >
                    <Icon className="w-5 h-5" />
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}

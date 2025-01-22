import Link from "next/link";
import { LayoutDashboard, Calendar, BookOpen, UserCircle } from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Events", href: "/events", icon: Calendar },
  { name: "Bookings", href: "/bookings", icon: BookOpen },
  { name: "Profile", href: "/profile", icon: UserCircle },
];

export default function Sidebar() {
  return (
    <aside className="w-64 fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white border-r border-gray-200">
      <nav className="p-4">
        <ul className="space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-2 text-gray-700 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
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
  );
}

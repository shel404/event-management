"use client";
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useState, useEffect } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    setIsCollapsed(isMobile);
  }, [isMobile]);

  return (
    <div className="min-h-screen max-w-full bg-gray-50 relative">
      <Navbar />
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <div
        className={`fixed top-16 right-0 bottom-0 overflow-y-auto ${
          isCollapsed ? "left-0" : "left-0 md:left-64"
        } transition-all duration-300`}
      >
        <div className="min-h-full w-full">
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="max-w-full overflow-hidden">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

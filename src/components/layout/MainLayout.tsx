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
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <div
        className={`pt-16 ${
          isCollapsed ? "ml-0" : "ml-0 md:ml-64"
        } transition-all duration-300`}
      >
        <div className="max-w-[100vw] overflow-x-hidden">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full">{children}</div>
        </div>
      </div>
    </div>
  );
}

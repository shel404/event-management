"use client";

import { useBookings } from "@/contexts/BookingContext";
import { Calendar, Users, Clock, TrendingUp } from "lucide-react";
import { mockEvents } from "@/data/mockEvents";

export default function DashboardStats() {
  const { bookings } = useBookings();
  const activeBookings = bookings.filter((b) => b.status === "confirmed");

  const stats = [
    {
      label: "Active Bookings",
      value: activeBookings.length,
      icon: Calendar,
      color: "bg-primary",
    },
    {
      label: "Available Events",
      value: mockEvents.length,
      icon: Clock,
      color: "bg-secondary",
    },
    {
      label: "Total Students",
      value: activeBookings.length,
      icon: Users,
      color: "bg-primary",
    },
    {
      label: "Booking Rate",
      value: `${Math.round(
        (activeBookings.length / mockEvents.length) * 100
      )}%`,
      icon: TrendingUp,
      color: "bg-secondary",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full overflow-hidden">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 overflow-hidden"
        >
          <div className="flex items-center gap-4">
            <div
              className={`p-3 rounded-lg ${stat.color} bg-opacity-10 flex-shrink-0`}
            >
              <stat.icon
                className={`w-5 h-5 sm:w-6 sm:h-6 ${stat.color.replace(
                  "bg-",
                  "text-"
                )}`}
              />
            </div>
            <div className="min-w-0">
              <p className="text-sm text-gray-600 truncate">{stat.label}</p>
              <p className="text-xl sm:text-2xl font-semibold text-gray-900">
                {stat.value}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

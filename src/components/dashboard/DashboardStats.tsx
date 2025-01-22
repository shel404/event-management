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
      color: "bg-blue-500",
    },
    {
      label: "Available Events",
      value: mockEvents.length,
      icon: Clock,
      color: "bg-green-500",
    },
    {
      label: "Total Students",
      value: activeBookings.length,
      icon: Users,
      color: "bg-purple-500",
    },
    {
      label: "Booking Rate",
      value: `${Math.round(
        (activeBookings.length / mockEvents.length) * 100
      )}%`,
      icon: TrendingUp,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white p-6 rounded-lg border border-gray-200"
        >
          <div className="flex items-center gap-4">
            <div
              className={`p-3 rounded-lg ${stat.color} bg-opacity-10 flex items-center justify-center`}
            >
              <stat.icon className={`w-6 h-6 text-gray-900`} />
            </div>
            <div>
              <p className="text-sm text-gray-600">{stat.label}</p>
              <p className="text-2xl font-semibold text-gray-900">
                {stat.value}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

"use client";

import { useBookings } from "@/contexts/BookingContext";
import Image from "next/image";
import Link from "next/link";

export default function RecentBookings() {
  const { bookings } = useBookings();

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Recent Bookings</h2>
        <Link
          href="/bookings"
          className="text-sm text-primary hover:text-primary-hover"
        >
          View all
        </Link>
      </div>
      <div className="space-y-4">
        {bookings.slice(0, 3).map((booking) => (
          <div
            key={booking.id}
            className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div className="relative w-12 h-12 rounded-lg overflow-hidden">
              <Image
                src={booking.event.imageUrl}
                alt={booking.event.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">
                {booking.event.title}
              </h3>
              <p className="text-sm text-gray-600">
                {booking.studentName} - {booking.event.date}
              </p>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                booking.status === "confirmed"
                  ? "bg-primary/10 text-primary"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {booking.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

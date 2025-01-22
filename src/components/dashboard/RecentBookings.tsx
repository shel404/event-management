"use client";

import { useBookings } from "@/contexts/BookingContext";
import Image from "next/image";
import Link from "next/link";

export default function RecentBookings() {
  const { bookings } = useBookings();

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Recent Bookings</h2>
        <Link
          href="/bookings"
          className="text-sm text-primary hover:text-primary/90"
        >
          View all
        </Link>
      </div>
      <div className="space-y-4">
        {bookings.slice(0, 3).map((booking) => (
          <div
            key={booking.id}
            className="flex items-center gap-4 p-4 rounded-lg bg-gray-50"
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
              className={`px-2 py-1 rounded-full text-xs ${
                booking.status === "confirmed"
                  ? "bg-green-100 text-green-800"
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

"use client";

import { useBookings } from "@/contexts/BookingContext";
import { Calendar, Clock, MapPin, Users, XCircle } from "lucide-react";
import Image from "next/image";

export default function BookingsPage() {
  const { bookings, cancelBooking } = useBookings();

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-8">My Bookings</h1>
      <div className="space-y-6">
        {bookings.length === 0 ? (
          <p className="text-gray-500 text-center py-8">
            You haven't made any bookings yet.
          </p>
        ) : (
          bookings.map((booking) => (
            <div
              key={booking.id}
              className={`bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden ${
                booking.status === "cancelled" && "opacity-75"
              }`}
            >
              <div className="flex">
                <div className="relative w-48 h-48">
                  <Image
                    src={booking.event.imageUrl}
                    alt={booking.event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {booking.event.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Booked on{" "}
                        {new Date(booking.bookingDate).toLocaleDateString()}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        booking.status === "confirmed"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {booking.status.charAt(0).toUpperCase() +
                        booking.status.slice(1)}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">
                        Event Details
                      </h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{booking.event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{booking.event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{booking.event.location}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">
                        Booking Details
                      </h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        <p>Student: {booking.studentName}</p>
                        <p>Age: {booking.studentAge}</p>
                        <p>Parent: {booking.parentName}</p>
                        <p>Contact: {booking.parentPhone}</p>
                      </div>
                    </div>
                  </div>

                  {booking.status === "confirmed" && (
                    <button
                      onClick={() => cancelBooking(booking.id)}
                      className="flex items-center gap-2 text-red-600 hover:text-red-700 text-sm font-medium"
                    >
                      <XCircle className="w-4 h-4" />
                      Cancel Booking
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

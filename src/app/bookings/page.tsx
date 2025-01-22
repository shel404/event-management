"use client";

import { useBookings } from "@/contexts/BookingContext";
import { Calendar, Clock, MapPin, Users, XCircle } from "lucide-react";
import Image from "next/image";
import Modal from "@/components/ui/Modal";
import { useState } from "react";

export default function BookingsPage() {
  const { bookings, cancelBooking } = useBookings();
  const [bookingToCancel, setBookingToCancel] = useState<string | null>(null);

  const handleCancelClick = (bookingId: string) => {
    setBookingToCancel(bookingId);
  };

  const handleConfirmCancel = () => {
    if (bookingToCancel) {
      cancelBooking(bookingToCancel);
      setBookingToCancel(null);
    }
  };

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">My Bookings</h1>

      <div className="grid gap-6">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex gap-4">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden">
                    <Image
                      src={booking.event.imageUrl}
                      alt={booking.event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      {booking.event.title}
                    </h2>
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
                </div>
                {booking.status === "confirmed" && (
                  <button
                    onClick={() => handleCancelClick(booking.id)}
                    className="flex items-center gap-2 px-4 py-2 text-gray-500 hover:text-red-500 transition-colors rounded-lg hover:bg-red-50"
                  >
                    <XCircle className="w-5 h-5" />
                    <span>Cancel Booking</span>
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Event Details</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="p-2 bg-primary/5 rounded-lg">
                        <Calendar className="w-4 h-4 text-primary" />
                      </div>
                      <span>{booking.event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="p-2 bg-secondary/5 rounded-lg">
                        <Clock className="w-4 h-4 text-secondary" />
                      </div>
                      <span>{booking.event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="p-2 bg-primary/5 rounded-lg">
                        <MapPin className="w-4 h-4 text-primary" />
                      </div>
                      <span>{booking.event.location}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Booking Details</h4>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center gap-3">
                      <div className="space-y-1">
                        <p>
                          <span className="font-medium">Student:</span>{" "}
                          {booking.studentName}
                        </p>
                        <p>
                          <span className="font-medium">Age:</span>{" "}
                          {booking.studentAge}
                        </p>
                        <p>
                          <span className="font-medium">Parent:</span>{" "}
                          {booking.parentName}
                        </p>
                        <p>
                          <span className="font-medium">Contact:</span>{" "}
                          {booking.parentPhone}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={!!bookingToCancel}
        onClose={() => setBookingToCancel(null)}
      >
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Cancel Booking
          </h2>
          <p className="text-gray-600 mb-6">
            Are you sure you want to cancel this booking? This action cannot be
            undone.
          </p>
          <div className="flex justify-end gap-3">
            <button
              onClick={() => setBookingToCancel(null)}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              Keep Booking
            </button>
            <button
              onClick={handleConfirmCancel}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Yes, Cancel Booking
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

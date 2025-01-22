"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { Event } from "@/types/event";
import { BookingFormData } from "@/components/events/BookingForm";

interface Booking extends BookingFormData {
  id: string;
  event: Event;
  bookingDate: string;
  status: "confirmed" | "cancelled";
}

interface BookingContextType {
  bookings: Booking[];
  addBooking: (event: Event, formData: BookingFormData) => void;
  cancelBooking: (bookingId: string) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const savedBookings = localStorage.getItem("bookings");
    if (savedBookings) {
      setBookings(JSON.parse(savedBookings));
    }
  }, []);

  const addBooking = (event: Event, formData: BookingFormData) => {
    const newBooking: Booking = {
      id: crypto.randomUUID(),
      event,
      ...formData,
      bookingDate: new Date().toISOString(),
      status: "confirmed",
    };

    setBookings((prev) => {
      const updated = [...prev, newBooking];
      localStorage.setItem("bookings", JSON.stringify(updated));
      return updated;
    });
  };

  const cancelBooking = (bookingId: string) => {
    setBookings((prev) => {
      const updated = prev.map((booking) =>
        booking.id === bookingId
          ? { ...booking, status: "cancelled" as const }
          : booking
      );
      localStorage.setItem("bookings", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking, cancelBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export const useBookings = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBookings must be used within a BookingProvider");
  }
  return context;
};

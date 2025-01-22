"use client";

import { useState } from "react";
import EventCard from "@/components/events/EventCard";
import { Event } from "@/types/event";
import { Palette, Dumbbell, GraduationCap, Sparkles } from "lucide-react";
import Modal from "@/components/ui/Modal";
import BookingForm, { BookingFormData } from "@/components/events/BookingForm";
import { useBookings } from "@/contexts/BookingContext";
import { mockEvents } from "@/data/mockEvents";

const categoryIcons = {
  all: Sparkles,
  sports: Dumbbell,
  academic: GraduationCap,
  arts: Palette,
};

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const { addBooking } = useBookings();

  const handleBooking = (event: Event) => {
    setSelectedEvent(event);
  };

  const handleBookingSubmit = (formData: BookingFormData) => {
    if (selectedEvent) {
      addBooking(selectedEvent, formData);
      setSelectedEvent(null);
    }
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4 text-center md:text-left">
          Available Events
        </h1>
        <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-4">
          {Object.entries(categoryIcons).map(([category, Icon]) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 sm:px-4 py-2 rounded-full text-sm flex items-center gap-2 ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <Icon className="w-4 h-4" />
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
        {mockEvents
          .filter(
            (event) =>
              selectedCategory === "all" || event.category === selectedCategory
          )
          .map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onBookClick={handleBooking}
            />
          ))}
      </div>

      <Modal isOpen={!!selectedEvent} onClose={() => setSelectedEvent(null)}>
        {selectedEvent && (
          <BookingForm event={selectedEvent} onSubmit={handleBookingSubmit} />
        )}
      </Modal>
    </div>
  );
}

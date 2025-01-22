"use client";

import { useState } from "react";
import EventCard from "@/components/events/EventCard";
import { Event } from "@/types/event";
import { Palette, Dumbbell, GraduationCap, Sparkles } from "lucide-react";
import Modal from "@/components/ui/Modal";
import BookingForm, { BookingFormData } from "@/components/events/BookingForm";

const categoryIcons = {
  all: Sparkles,
  sports: Dumbbell,
  academic: GraduationCap,
  arts: Palette,
};

const mockEvents: Event[] = [
  {
    id: "1",
    title: "Summer Science Camp",
    description: "A fun-filled week of scientific experiments and discoveries",
    date: "2024-07-15",
    time: "9:00 AM",
    location: "Science Center",
    capacity: 30,
    availableSpots: 15,
    price: 199,
    imageUrl: "/images/science-camp.jpg",
    category: "academic",
  },
  {
    id: "2",
    title: "Junior Football League",
    description: "Weekly soccer training and matches for kids aged 8-12",
    date: "2024-06-01",
    time: "2:00 PM",
    location: "City Sports Complex",
    capacity: 40,
    availableSpots: 12,
    price: 149,
    imageUrl: "/images/football-league.jpg",
    category: "sports",
  },
  {
    id: "3",
    title: "Art & Craft Workshop",
    description: "Express creativity through painting, drawing, and crafting",
    date: "2024-05-20",
    time: "10:00 AM",
    location: "Creative Arts Studio",
    capacity: 20,
    availableSpots: 8,
    price: 89,
    imageUrl: "/images/art-workshop.jpg",
    category: "arts",
  },
  {
    id: "4",
    title: "Robotics Workshop",
    description: "Learn to build and program your own robot",
    date: "2024-08-05",
    time: "1:00 PM",
    location: "Tech Innovation Hub",
    capacity: 25,
    availableSpots: 10,
    price: 249,
    imageUrl: "/images/robotics.jpg",
    category: "academic",
  },
  {
    id: "5",
    title: "Swimming Classes",
    description: "Professional swimming lessons for beginners to intermediate",
    date: "2024-06-15",
    time: "11:00 AM",
    location: "Aquatic Center",
    capacity: 15,
    availableSpots: 5,
    price: 179,
    imageUrl: "/images/swimming.jpg",
    category: "sports",
  },
];

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const handleBooking = (event: Event) => {
    setSelectedEvent(event);
  };

  const handleBookingSubmit = (formData: BookingFormData) => {
    console.log("Booking submitted:", { event: selectedEvent, formData });
    // Implement booking submission logic here
    setSelectedEvent(null);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Available Events
        </h1>
        <div className="flex gap-4">
          {Object.entries(categoryIcons).map(([category, Icon]) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm flex items-center gap-2 ${
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

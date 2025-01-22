import Image from "next/image";
import { Event } from "@/types/event";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

interface EventCardProps {
  event: Event;
  onBookClick: (event: Event) => void;
}

export default function EventCard({ event, onBookClick }: EventCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="relative h-48">
        <Image
          src={event.imageUrl}
          alt={event.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
          <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm">
            £{event.price}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{event.description}</p>
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Calendar className="w-4 h-4" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Clock className="w-4 h-4" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <MapPin className="w-4 h-4" />
            <span>{event.location}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <Users className="w-4 h-4" />
            <span>{event.availableSpots} spots left</span>
          </div>
          <button
            onClick={() => onBookClick(event)}
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

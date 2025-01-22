import Image from "next/image";
import { Event } from "@/types/event";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

interface EventCardProps {
  event: Event;
  onBookClick: (event: Event) => void;
}

export default function EventCard({ event, onBookClick }: EventCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={event.imageUrl}
          alt={event.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <span className="absolute top-4 right-4 px-3 py-1.5 bg-white/90 text-primary font-semibold rounded-full text-sm backdrop-blur-sm">
          £{event.price}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          {event.title}
        </h3>
        <p className="text-gray-600 text-sm mb-6 line-clamp-2">
          {event.description}
        </p>
        <div className="flex flex-col gap-3 mb-6">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <div className="p-2 bg-primary/5 rounded-lg">
              <Calendar className="w-4 h-4 text-primary" />
            </div>
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <div className="p-2 bg-secondary/5 rounded-lg">
              <Clock className="w-4 h-4 text-secondary" />
            </div>
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <div className="p-2 bg-primary/5 rounded-lg">
              <MapPin className="w-4 h-4 text-primary" />
            </div>
            <span>{event.location}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            <div className="p-2 bg-secondary/5 rounded-lg">
              <Users className="w-4 h-4 text-secondary" />
            </div>
            <span className="font-medium text-gray-900">
              {event.availableSpots} spots left
            </span>
          </div>
          <button
            onClick={() => onBookClick(event)}
            className="px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors font-medium"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

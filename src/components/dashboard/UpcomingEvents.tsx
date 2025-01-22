"use client";

import { mockEvents } from "@/data/mockEvents";
import Image from "next/image";
import Link from "next/link";

export default function UpcomingEvents() {
  const upcomingEvents = mockEvents
    .filter((event) => new Date(event.date) > new Date())
    .slice(0, 3);

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Upcoming Events</h2>
        <Link
          href="/events"
          className="text-sm text-primary hover:text-primary/90"
        >
          View all
        </Link>
      </div>
      <div className="space-y-4">
        {upcomingEvents.map((event) => (
          <div
            key={event.id}
            className="flex items-center gap-4 p-4 rounded-lg bg-gray-50"
          >
            <div className="relative w-12 h-12 rounded-lg overflow-hidden">
              <Image
                src={event.imageUrl}
                alt={event.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">{event.title}</h3>
              <p className="text-sm text-gray-600">
                {event.date} - {event.time}
              </p>
            </div>
            <span className="text-sm text-primary font-medium">
              £{event.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

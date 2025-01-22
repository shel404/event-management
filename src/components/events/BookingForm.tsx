"use client";

import { Event } from "@/types/event";
import { useState } from "react";
import Image from "next/image";

export interface BookingFormData {
  studentName: string;
  studentAge: string;
  parentName: string;
  parentPhone: string;
}

interface BookingFormProps {
  event: Event;
  onSubmit: (data: BookingFormData) => void;
}

export default function BookingForm({ event, onSubmit }: BookingFormProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    studentName: "",
    studentAge: "",
    parentName: "",
    parentPhone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start mb-6">
        <div className="relative w-full sm:w-32 h-24 sm:h-32 rounded-lg overflow-hidden flex-shrink-0">
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 128px"
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            {event.title}
          </h2>
          <p className="text-sm text-gray-600 mb-1">
            {event.date} at {event.time}
          </p>
          <p className="text-sm text-gray-600">{event.location}</p>
          <p className="text-primary font-medium mt-2">£{event.price}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 text-gray-800">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="studentName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Student Name
            </label>
            <input
              type="text"
              id="studentName"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              value={formData.studentName}
              onChange={(e) =>
                setFormData({ ...formData, studentName: e.target.value })
              }
            />
          </div>

          <div>
            <label
              htmlFor="studentAge"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Student Age
            </label>
            <input
              type="number"
              id="studentAge"
              required
              min="3"
              max="18"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              value={formData.studentAge}
              onChange={(e) =>
                setFormData({ ...formData, studentAge: e.target.value })
              }
            />
          </div>

          <div>
            <label
              htmlFor="parentName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Parent Name
            </label>
            <input
              type="text"
              id="parentName"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              value={formData.parentName}
              onChange={(e) =>
                setFormData({ ...formData, parentName: e.target.value })
              }
            />
          </div>

          <div>
            <label
              htmlFor="parentPhone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Parent Phone
            </label>
            <input
              type="tel"
              id="parentPhone"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              value={formData.parentPhone}
              onChange={(e) =>
                setFormData({ ...formData, parentPhone: e.target.value })
              }
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            type="submit"
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors w-full sm:w-auto"
          >
            Complete Booking
          </button>
        </div>
      </form>
    </div>
  );
}

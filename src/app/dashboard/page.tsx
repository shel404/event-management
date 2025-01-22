import { Suspense } from "react";
import DashboardStats from "@/components/dashboard/DashboardStats";
import RecentBookings from "@/components/dashboard/RecentBookings";
import UpcomingEvents from "@/components/dashboard/UpcomingEvents";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>

      <Suspense fallback={<div>Loading stats...</div>}>
        <DashboardStats />
      </Suspense>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Suspense fallback={<div>Loading bookings...</div>}>
          <RecentBookings />
        </Suspense>

        <Suspense fallback={<div>Loading events...</div>}>
          <UpcomingEvents />
        </Suspense>
      </div>
    </div>
  );
}

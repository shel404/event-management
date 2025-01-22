import { Event } from "@/types/event";

export const mockEvents: Event[] = [
  {
    id: "1",
    title: "Summer Science Camp",
    description: "A fun-filled week of scientific experiments and discoveries",
    date: "2025-07-15",
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
    date: "2025-06-01",
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
    date: "2025-05-20",
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
    date: "2025-08-05",
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
    date: "2025-06-15",
    time: "11:00 AM",
    location: "Aquatic Center",
    capacity: 15,
    availableSpots: 5,
    price: 179,
    imageUrl: "/images/swimming.jpg",
    category: "sports",
  },
];

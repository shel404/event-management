export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  capacity: number;
  availableSpots: number;
  price: number;
  imageUrl: string;
  category: "sports" | "academic" | "arts" | "other";
}

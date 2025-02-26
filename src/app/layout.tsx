import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/layout/MainLayout";
import { BookingProvider } from "@/contexts/BookingContext";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EventBook - Student Event Management",
  description: "Book events for your students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <BookingProvider>
          <MainLayout>{children}</MainLayout>
        </BookingProvider>
      </body>
    </html>
  );
}

import "./globals.css";
import "./animation.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import ToastProvider from "@/components/toast-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "FlicSync",
  description:
    "FlickSync is an app to organize movie nights with your friends.",
  // icons: [{rel: "icon", url: favicon.ico}]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}

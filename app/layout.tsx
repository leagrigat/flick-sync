import { ChakraProvider } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {children: React.ReactNode}) {
  return (
    <ChakraProvider>
      <div className={inter.className}>{children}</div>
    </ChakraProvider>
  );
}

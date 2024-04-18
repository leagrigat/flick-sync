import "./globals.css";
import { Providers } from "./poviders";
import { fonts } from "./fonts";


export default function RootLayout({
  children,
}: {children: React.ReactNode}) {
  return (
    <html lang='de' className={fonts.rubik.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
    
  );
}
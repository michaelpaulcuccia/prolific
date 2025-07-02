import "./globals.css";
import { ThemeProvider } from "../../context/Theme";
import type { Metadata } from "next";
//import { GeistSans } from 'geist/font/sans'; // if you're using this font

export const metadata: Metadata = {
  title: "Your App",
  description: "App description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

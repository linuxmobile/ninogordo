import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "NIÑO GORDO - Parrilla Asiática",
  description:
    "Sabores milenarios con un toque argentino. Encendé tu paladar. Thames 1810, Buenos Aires, Argentina.",
  generator: "Niño Gordo",
  applicationName: "Niño Gordo",
  keywords: ["Niño Gordo", "Parrilla", "Asiática", "Buenos Aires"],
  colorScheme: "dark light",
  creator: "codemars",
  publisher: "codemars",
  robots: {
    index: false,
    follow: true,
    nocache: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "NIÑO GORDO - Parrilla Asiática",
    description:
      "Sabores milenarios con un toque argentino. Encendé tu paladar. Thames 1810, Buenos Aires, Argentina.",
    creator: "@codemarsweb",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-ng-dark text-ng-foreground px-3 py-4`}>
        {children}
      </body>
    </html>
  );
}

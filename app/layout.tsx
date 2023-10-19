import { Metadata } from "next";
//
import { Inter, David_Libre } from "next/font/google";

// Font optimization
// const inter = Inter({ subsets: ["latin"] });
const davidLibre = David_Libre({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Home",
  description: "GraphQL with Next.js",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={davidLibre.className}>{children}</body>
    </html>
  );
}

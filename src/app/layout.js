import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://portfolio-pkc8.vercel.app"),
  openGraph: {
    type: "website",
    url: "https://portfolio-pkc8.vercel.app",
    siteName: "Mahmoud Hosny",
    title: "Mahmoud Hosny | Full-Stack Developer",
    description:
      "Full-Stack Developer (React/Next.js + ASP.NET Core). Cairo based, open to remote or relocation.",
    images: [
      { url: "/og-banner.jpg", width: 1200, height: 630, alt: "Mahmoud Hosny - Full-Stack Developer" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahmoud Hosny | Full-Stack Developer",
    description:
      "Full-Stack Developer (React/Next.js + ASP.NET Core). Cairo based, open to remote or relocation.",
    images: ["/og-banner.jpg"],
  },
  title: "Mahmoud Hosny | Full-Stack Developer",
  description:
    "Mahmoud Hosny - Full-Stack Developer (React/Next.js + ASP.NET Core). Cairo based, shipping real apps for real users. Open to remote or relocation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "bg-background text-foreground")}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

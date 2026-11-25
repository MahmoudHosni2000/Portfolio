import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
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

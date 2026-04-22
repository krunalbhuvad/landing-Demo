import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "NeuroFlow AI | Automate Workflows Smarter",
  description:
    "NeuroFlow AI is a productivity platform that automates workflows with intelligent actions and real-time insights."
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

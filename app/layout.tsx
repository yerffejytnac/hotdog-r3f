import type { Metadata } from "next";

import { Providers } from "@/components";

export const metadata: Metadata = {
  title:
    "Your one-of-a-kind pet deserves a one-of-a-kind portrait. | Hotdog 🐶📸",
  description: "Your one-of-a-kind pet deserves a one-of-a-kind portrait.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

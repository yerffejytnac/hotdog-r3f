import type { Metadata } from "next";

import { Providers } from "@/components";

export const metadata: Metadata = {
  title: "App",
  description: "Boilerplate for Next.js",
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

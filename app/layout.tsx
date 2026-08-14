import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SmartEaseTech Studio",
  description: "A Boutique iOS Design & Development Studio",
  // 这里就是您的专属 Google 验证身份牌
  verification: {
    google: "xx9SYK30JfOTFA9S5yGTHv8hyaqsrWB2Xc4casWhloQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white">{children}</body>
    </html>
  );
}
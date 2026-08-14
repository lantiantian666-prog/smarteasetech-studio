import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "SmartEaseTech Studio",
  description: "A Boutique iOS Design & Development Studio",
  // 您的专属 Google 验证身份牌
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
      <body className="antialiased bg-black text-white">
        {children}

        {/* Cloudflare Web Analytics 极速无痕统计脚本 */}
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "bbd7d2072d2f407fa7435a7ad2bfc263"}'
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
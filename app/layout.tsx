import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { getSiteUrl } from "./site-config";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], display: "swap", variable: "--font-manrope" });

const title = "Ahmad Muzzaki Mahmud | Finance & Operations Manager";
const description =
  "Ahmad Muzzaki Mahmud is a Bandung-based finance and operations manager. Explore his work in cost control, production, cash flow, and business building.";
const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title,
  description,
  applicationName: "Ahmad Muzzaki Mahmud Portfolio",
  metadataBase: new URL(siteUrl ?? "http://localhost:3000"),
  alternates: siteUrl ? { canonical: siteUrl } : undefined,
  robots: { index: true, follow: true },
  openGraph: {
    type: "profile",
    locale: "en_US",
    title,
    description,
    siteName: "Ahmad Muzzaki Mahmud",
    url: siteUrl,
  },
  twitter: { card: "summary_large_image", title, description },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className={manrope.variable}><body>{children}</body></html>;
}

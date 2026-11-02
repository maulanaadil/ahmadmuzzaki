import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { getSiteUrl } from "./site-config";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], style: ["normal", "italic"], display: "swap", variable: "--font-dm-sans" });

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
  return <html lang="en" className={dmSans.variable}><body>{children}</body></html>;
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Providers } from "@/components/Providers";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "iLead Mentorship — Empowering Young Leaders",
  description: "A mentorship and leadership platform helping young people grow through emotional intelligence, public speaking, entrepreneurship and digital skills.",
  openGraph: {
    title: "iLead Mentorship — Empowering Young Leaders",
    description: "A mentorship and leadership platform helping young people grow through emotional intelligence, public speaking, entrepreneurship and digital skills.",
    type: "website",
    images: [
      {
        url: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6ad18687-ac03-44d2-8e98-faeb0705cb6d/id-preview-978bb506--412c4c5f-5855-484a-aa70-892dda8857d2.lovable.app-1778767207435.png",
      },
    ],
  },
  twitter: {
    card: "summary",
    site: "@iLead",
    title: "iLead Mentorship — Empowering Young Leaders",
    description: "A mentorship and leadership platform helping young people grow through emotional intelligence, public speaking, entrepreneurship and digital skills.",
    images: ["https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6ad18687-ac03-44d2-8e98-faeb0705cb6d/id-preview-978bb506--412c4c5f-5855-484a-aa70-892dda8857d2.lovable.app-1778767207435.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}

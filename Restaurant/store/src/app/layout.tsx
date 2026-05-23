import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Notification from "@/component/Notification";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import AuthProvider from "@/component/AuthProvider";
import QueryProvider from "@/component/QueryProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DUCK's Restaurant",
  description: "Best food for you!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AuthProvider>
          <QueryProvider>
            <div>
              <Notification /> 
              <Navbar />
              {children}
              <Footer />
              <ToastContainer position="bottom-right" theme="dark" autoClose={3000} />
            </div>
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

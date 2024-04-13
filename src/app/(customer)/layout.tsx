import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Fragment } from "react";

export default function VendorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="container mx-auto min-h-screen">
        <Header />
        {children}
      </main>
      <Footer />
    </>
  );
}

import { ModeToggle } from "@/components/ui/mode-toggle";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { VendorHeader } from "@/components/vendor/vendorHeader";
import { VendorFooter } from "@/components/vendor/vendorFooter";

export default function VendorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <main className="container mx-auto min-h-screen">
          <VendorHeader />
          {children}
        </main>
        <VendorFooter />
      </ThemeProvider>
    </>
  );
}

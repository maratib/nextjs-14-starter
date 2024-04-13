import { AdminHeader } from "@/components/admin/adminHeader";
import { AdminFooter } from "@/components/admin/adminFooter";
import { ThemeProvider } from "@/components/ui/theme-provider";

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
          <AdminHeader />
          {children}
        </main>
        <AdminFooter />
      </ThemeProvider>
    </>
  );
}

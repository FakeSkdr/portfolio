import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import { LayoutHeader } from "@/components/layout-header";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LayoutHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

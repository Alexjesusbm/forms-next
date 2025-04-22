import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Header } from "./components/header";

export const metadata: Metadata = {
  title: "Forms",
  description: "Formes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          <div className="mx-auto w-full min-h-screen p-8">
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

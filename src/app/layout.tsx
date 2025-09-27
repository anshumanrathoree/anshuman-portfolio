import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { CursorHunterDrone } from "@/components/cursor-hunter-drone";
import { NoSSR } from "@/components/no-ssr";
import { HydrationWrapper } from "@/components/hydration-wrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Anshuman Rathore - Cloud & DevOps Engineer",
  description: "Cloud & DevOps Engineer specializing in AWS, Docker, Kubernetes, Terraform, and AI-driven solutions. Building scalable infrastructure for modern applications.",
  keywords: ["Cloud Engineer", "DevOps", "AWS", "Docker", "Kubernetes", "Terraform", "Python", "AI", "LLMs"],
  authors: [{ name: "Anshuman Rathore" }],
  creator: "Anshuman Rathore",
  metadataBase: new URL("https://anshumanrathore.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anshumanrathore.dev",
    title: "Anshuman Rathore - Cloud & DevOps Engineer",
    description: "Cloud & DevOps Engineer specializing in AWS, Docker, Kubernetes, Terraform, and AI-driven solutions.",
    siteName: "Anshuman Rathore Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anshuman Rathore - Cloud & DevOps Engineer",
    description: "Cloud & DevOps Engineer specializing in AWS, Docker, Kubernetes, Terraform, and AI-driven solutions.",
    creator: "@anshumanrathore",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window !== 'undefined') {
                  const cleanupExtensionAttributes = () => {
                    ['bis_skin_checked', 'data-new-gr-c-s-check-loaded', 'data-gr-ext-installed', 'data-lt-installed'].forEach(attr => {
                      document.querySelectorAll('[' + attr + ']').forEach(el => el.removeAttribute(attr));
                    });
                  };

                  if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', cleanupExtensionAttributes);
                  } else {
                    cleanupExtensionAttributes();
                  }
                }
              })();
            `
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
        suppressHydrationWarning
        style={{ opacity: 1 }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <HydrationWrapper>
            <Navbar />
            {children}
            <NoSSR>
              <CursorHunterDrone />
            </NoSSR>
          </HydrationWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}

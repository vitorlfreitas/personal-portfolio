import { ChakraProvider } from "@chakra-ui/react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Vitor Freitas Personal Portfolio",
    description:
        "Personal website created by Vitor Freitas to highlight his skills and achievements",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden scroll-smooth`}
            >
                <ChakraProvider>
                    {children}
                </ChakraProvider>
            </body>
        </html>
    );
}

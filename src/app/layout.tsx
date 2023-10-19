"use client"
import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {usePathname} from "next/navigation";
import {checkPublicRoute} from "@/app/functions/checkPublicRoute";
import PrivateRoute from "@/app/components/PrivateRoute";
import Header from "@/app/components/style/Header";

const inter = Inter({subsets: ['latin']})


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {


    const pathname = usePathname();
    const isPublicPage = checkPublicRoute(pathname!);
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className="flex">
            <div>
                <Header/>
            </div>

            <main className="h-full w-full">
                {isPublicPage && children}
                {!isPublicPage && (
                    <PrivateRoute>
                        {children}
                    </PrivateRoute>
                )}
            </main>
        </div>
        </body>
        </html>
    )
}

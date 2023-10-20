"use client"
import './globals.css'
import type {Metadata} from 'next'
import {Roboto} from 'next/font/google'
import {usePathname} from "next/navigation";
import {checkPublicRoute} from "@/app/functions/checkPublicRoute";
import PrivateRoute from "@/app/components/PrivateRoute";
import Header from "@/app/components/style/Header";
import Sidebar from "@/app/components/style/Sidebar";

const inter = Roboto({subsets: ['latin'], weight: "400"})


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
        <div className="flex flex-col">
            <div>
                <Header/>
            </div>

            <div className={`flex`}>
                <Sidebar/>
                <main className="h-full w-4/5">
                    {isPublicPage && children}
                    {!isPublicPage && (
                        <PrivateRoute>
                            {children}
                        </PrivateRoute>
                    )}
                </main>
            </div>
        </div>
        </body>
        </html>
    )
}

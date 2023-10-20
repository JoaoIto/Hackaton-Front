"use client"
import './globals.css'
import {Roboto} from 'next/font/google'
import {usePathname} from "next/navigation";
import {checkPublicRoute} from "@/app/functions/checkPublicRoute";
import PrivateRoute from "@/app/components/PrivateRoute";
import Header from "@/app/components/style/Header";
import Sidebar from "@/app/components/style/Sidebar";
import Footer from "@/app/components/style/Footer";

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
                    {isPublicPage && children}
                    {!isPublicPage && (
                        <PrivateRoute>
                            {children}
                        </PrivateRoute>
                    )}
            </div>
            <Footer/>
        </div>
        </body>
        </html>
    )
}

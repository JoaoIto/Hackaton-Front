"use client"
import '../globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {usePathname} from "next/navigation";
import {checkPublicRoute} from "@/app/functions/checkPublicRoute";
import {Title} from "../components/style/Title";

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
        <div className={`h-full flex items-center justify-center bg-gradient-to-l from-verdeClaro to-verdeEscuroGradient`}>
            <div className="h-5/6 w-full flex">
                <main className="flex items-center justify-center w-full h-full">
                    <div className={`flex h-full w-5/6 p-4`}>
                        <div className={`h-4/5 w-1/2 flex items-center justify-center`}>
                            <Title/>
                        </div>
                        <div className={`w-1/2`}>
                            {children}
                        </div>
                    </div>
                </main>
            </div>
        </div>
        </body>
        </html>
    )
}

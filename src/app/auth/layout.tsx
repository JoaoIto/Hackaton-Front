"use client"
import '../globals.css'
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
        <div className={`h-full flex items-center justify-center bg-gradient-to-t from-verdeEscuroGradient to-verdeClaro`}>
            <div className="h-5/6 w-full flex">
                <main className="flex items-center justify-center w-full h-full">
                    <div className={`flex h-full w-1/2 p-4`}>
                            {children}
                    </div>
                </main>
            </div>
        </div>
        </body>
        </html>
    )
}

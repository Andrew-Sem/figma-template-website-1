import './globals.css'
import {Header} from "@/components/Header";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head/>
        <body className={"font-base"}>
        <Header/>
        <main className={"container mx-auto"}>
        {children}
        </main>
        </body>
        </html>
    )
}

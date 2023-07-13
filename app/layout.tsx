import './chota.min.css'
import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Cocoa Desktop Clone',
    description: 'Cocoa Desktop Clone',
    viewport:{
        width:"device-width",
        initialScale: 1
    }
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="ko">
        <body className={inter.className}>{children}</body>
        </html>
    )
}

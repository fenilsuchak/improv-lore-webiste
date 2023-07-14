import './globals.css'
import { Inter } from 'next/font/google'


const comic_nueue = Inter({
  subsets: ['latin'], // Specify the desired font weights here
});

export const metadata = {
  title: 'Improv Lore Website',
  description: 'Made by fs',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={comic_nueue.className} style={{ background: `url("/wallpaper.jpg") no-repeat center center fixed`, backgroundSize: 'cover' }}>{children}</body>
    </html>
  )
}
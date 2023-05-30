import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import maps from '../lib/maps.json'
const inter = Inter({ subsets: ['latin'] })

// there has to be a better way
type MapType = {
  id: number,
  name: string
  slug: string
}

export function createNavigation(maps: MapType[]) {
  return maps.map((mapObj) => (
    <Link href={`map/${mapObj.slug}`}>{mapObj.name}</Link>
  ))
}


export const metadata = {
  title: 'Speedrun.gg',
  description: 'Time Attack leaderboard for Ghost of Tsushima: Legends',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className="container mx-auto  border-4 border-fuchsia-400">
        <header>This is the header</header>
        <nav>
          {createNavigation(maps)}
        </nav>
        {children}
        </section>
      </body>
    </html>
  )
}

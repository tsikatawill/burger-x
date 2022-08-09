import Hero from './Hero'
import Navbar from './Navbar'

export default function Header() {
  return (
    <header className="bg-yellow-300">
      <Navbar />
      <Hero />
    </header>
  )
}

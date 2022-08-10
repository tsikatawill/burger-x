import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Locations from './components/Locations'
import Menu from './components/Menu'

export default function App() {
  return (
    <AnimatePresence>
      <Header />
      <Menu />
      <Locations />
    </AnimatePresence>
  )
}

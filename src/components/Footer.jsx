import Logo from '../images/burger-king-logo.png'
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-neutral-900">
      <div className="container py-10 flex flex-col sm:flex-row gap-7 sm:gap-0 justify-between items-center sm:items-start">
        <div className="flex items-center flex-col sm:flex-row text-white gap-5">
          <img src={Logo} alt="logo" className="w-20 sm:w-32" />
          <div className="text-center sm:text-left">
            <span className="font-bold text-3xl">Burger-X</span>

            <p className="text-xs max-w-xs sm:max-w-sm mt-4 text-slate-300">
              Dignissimos temporibus, non quisquam hic incidunt magni, in
              maiores ullam culpa corrupti natus itaque esse.
            </p>
          </div>
        </div>
        <div>
          <p className="font-bold text-lg text-white">Follow Burger-X</p>

          <div className="flex gap-2 mt-4 text-slate-300 text-lg cursor-pointer">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
            <FaTiktok />
          </div>
        </div>
      </div>
    </footer>
  )
}

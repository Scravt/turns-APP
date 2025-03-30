import Logo from './Base/Logo'
import { PiBell } from "react-icons/pi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='border px-4 py-2 flex justify-between items-center w-full self-end'>
  <Logo />
      <nav className='flex justify-around gap-4 items-center' >
        <Link> <PiBell /></Link>
        <div className='border  flex justify-around gap-2 items-center'>
          <img className='rounded-full border h-12 w-12 ' alt='Foto de Perfil'></img>
          <div className='text-xs font-medium'>José Pérez</div>
        </div>

        </nav>
    </footer>
  )
}

export default Footer
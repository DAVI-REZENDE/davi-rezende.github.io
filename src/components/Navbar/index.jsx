import { Link } from 'react-scroll'
import logoSvg from '../../assets/logo.svg'

import {
  ModalMenu,
  Header,
  Menu
} from './styles'

export function Navbar({ setActiveMenu, activeMenu }) {

  function handleToggleMenu() {
    setActiveMenu(oldState => !oldState)
  }

  return (
    <>
      <ModalMenu active={activeMenu}>
        <a onClick={handleToggleMenu} href="#about" className="menu-item">About</a>
        <a onClick={handleToggleMenu} href="#skills" className="menu-item">Skills</a>
        <a onClick={handleToggleMenu} href="#projects" className="menu-item">Projects</a>
        <a onClick={handleToggleMenu} href="#contact" className="menu-item">Contact</a>
      </ModalMenu>

      <Header>
        <img src={logoSvg} />

        <Menu>
            <button onClick={handleToggleMenu} className="menu-button">
              <span className="row r-top" />
              <span className="row r-center" />
              <span className="row r-bottom" />
            </button>
            <a className='menu-item-desktop' href="#about">
                About
            </a>
            

            <a className='menu-item-desktop' href="#skills">
                Skills
            </a>
            

            <a className='menu-item-desktop' href="#projects">
                Projects
            </a>
            

            <a className='menu-item-desktop' href="#contact">
                Contact
            </a>
        </Menu>
      </Header>
    </>
  );
}

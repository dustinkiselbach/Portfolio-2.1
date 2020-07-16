import React from 'react'
import { _Navbar, NavbarItems, NavbarItem } from './Navbar.style'

interface NavBarProps {
  showMenu: boolean
}

const NavLinks = ['home', 'about', 'projects', 'contact']

export const NavBar: React.FC<NavBarProps> = ({ showMenu }) => {
  return (
    <_Navbar>
      <NavbarItems>
        {showMenu && (
          <>
            {NavLinks.map(link => (
              <NavbarItem
                key={link}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <a href={`#${link}`}>{link}</a>
              </NavbarItem>
            ))}
          </>
        )}
      </NavbarItems>
    </_Navbar>
  )
}

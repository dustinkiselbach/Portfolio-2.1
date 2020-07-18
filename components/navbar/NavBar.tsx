import React, { useState } from 'react'
import { _Navbar, NavbarItems, NavbarItem } from './Navbar.style'
import { customEase } from '../../utils/customEase'

interface NavBarProps {
  showMenu: boolean
  width: number
}

const NavLinks = ['home', 'about', 'projects', 'contact']

export const NavBar: React.FC<NavBarProps> = ({ showMenu, width }) => {
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <>
      <_Navbar>
        <NavbarItems>
          {showMenu && (
            <>
              {width < 600 ? (
                <>
                  {mobileMenu && (
                    <>
                      {NavLinks.map(link => (
                        <NavbarItem
                          key={link}
                          initial={{ x: 200, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.2, ease: customEase }}
                        >
                          <a
                            onClick={() =>
                              setMobileMenu(opened => (opened ? false : true))
                            }
                            href={`#${link}`}
                          >
                            {link}
                          </a>
                        </NavbarItem>
                      ))}
                    </>
                  )}

                  <NavbarItem initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <a
                      onClick={() =>
                        setMobileMenu(opened => (opened ? false : true))
                      }
                    >
                      {mobileMenu ? (
                        <i
                          style={{ color: 'white' }}
                          className='fas fa-chevron-right'
                        />
                      ) : (
                        'menu'
                      )}
                    </a>
                  </NavbarItem>
                </>
              ) : (
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
            </>
          )}
        </NavbarItems>
      </_Navbar>
    </>
  )
}

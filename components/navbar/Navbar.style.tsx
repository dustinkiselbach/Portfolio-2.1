import styled from 'styled-components'
import { motion } from 'framer-motion'

export const _Navbar = styled.div`
  position: fixed;
  width: 100%;
  padding: 1rem;
  z-index: 10;
`
export const NavbarItems = styled.ul`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`

export const NavbarItem = styled(motion.li)`
  position: relative;
  &:not(:last-child) {
    margin-right: 1rem;
  }
  text-transform: capitalize;
  & a {
    &:before,
    &:after {
      content: '';
      position: absolute;
      bottom: -4px;
      width: 5px;
      height: 2px;
      margin: 5px 0 0;
      transition: all 0.5s ease-in-out;
      opacity: 0;
      background-color: ${props => props.theme.colors.colorText};
      left: 0;
    }
    &:hover {
      &:before,
      &:after {
        width: 100%;
        opacity: 1;
      }
    }
  }
`

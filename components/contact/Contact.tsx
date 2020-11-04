import React from 'react'
import { _Contact, ContactList } from './Contact.style'

interface ContactProps {}

export const Contact: React.FC<ContactProps> = ({}) => {
  return (
    <_Contact id='contact'>
      <h1>Contact me</h1>
      <ContactList>
        <li>
          <a href='tel:940-642-8235'>
            <i className='fas fa-phone'></i>940-642-8235
          </a>
        </li>
        <li>
          <a href='mailto:dustinkiselbach@gmail.com'>
            <i className='far fa-envelope'></i>dustinkiselbach@gmail.com
          </a>
        </li>
      </ContactList>
    </_Contact>
  )
}

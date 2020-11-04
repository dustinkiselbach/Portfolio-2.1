import styled from 'styled-components'

export const _Contact = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.colorBlack};
  padding: 2rem;

  h1 {
    margin-bottom: 2rem;
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: 0.05rem;
  }
`
export const ContactList = styled.ul`
  color: ${props => props.theme.colors.colorTextMuted};
  line-height: 2rem;
  i {
    margin-right: 0.5rem;
  }
  a {
    transition: all 0.2s ease-in;
    color: ${props => props.theme.colors.colorTextMuted};
    &:hover {
      color: white;
    }
  }
`

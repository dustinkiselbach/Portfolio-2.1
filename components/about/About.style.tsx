import styled from 'styled-components'

export const _About = styled.section`
  background-color: ${props => props.theme.colors.colorBlack};
  color: ${props => props.theme.colors.colorTextMuted};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  height: calc(var(--vh, 1vh) * 50);
`

export const AboutText = styled.p`
  text-align: center;
  width: 33.33333%;
  line-height: 1.6rem;
`

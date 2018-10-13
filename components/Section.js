import styled from 'styled-components/macro'

const Section = styled.div`
  margin-top: ${p => (p.marginTop ? `${p.marginTop}rem` : '0')};

  h2 {
    font-size: 1.3em;
    font-weight: bold;
  }
`

export default Section

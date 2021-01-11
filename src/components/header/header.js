import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import home from '../../images/home.svg'
import night from '../../images/moon-cloud-duotone.svg'
import day from '../../images/house-day-duotone.svg'

const Wrapper = styled.div`
  height: 56px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-transform: uppercase;
  width: 90%;
  margin: 0 auto;
  max-width: 1080px;
  place-content: center;
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`
const Logo = styled.div`
  padding-left: 20px;
  @media (max-width: 480px) {
    padding-left: 0;
  }
`

const DItems = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  @media (max-width: 480px) {
    display: none;
  }
`

const DItem = styled.div`
  display: grid;
  place-content: center;
  text-align: center;
`

const BottomNav = styled.div`
  bottom: 0;
  height: 56px;
  position: fixed;
  width: 100%;
  @media (min-width: 480px) {
    display: none;
  }
`

const MItems = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`

const MItem = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  place-content: center;
  text-align: center;
`

const MImage = styled.img`
  width: 50%;
  margin: 0 auto;
`

const MText = styled.div`
  font-size: 12px;
`

const Header = ({ siteTitle, toggleTheme, theme }) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <header>
      {/* {theme === 'light' && <div onClick={toggleTheme}>dark theme</div>}
      {theme === 'dark' && <div >light theme</div>} */}
      <Wrapper>
        <Logo>{siteTitle}</Logo>
        <DItems>
          <DItem>One</DItem>
          <DItem>Two</DItem>
          <DItem>Three</DItem>
          <DItem>Four</DItem>
          <DItem>Five</DItem>
        </DItems>
      </Wrapper>
      <BottomNav>
        <MItems>
          <MItem>
            <MImage src={home} />
            <MText>Home</MText>
          </MItem>
          <MItem>
            <MImage src={home} />
            <MText>Home</MText>
          </MItem>
          <MItem>
            <MImage src={home} />
            <MText>Home</MText>
          </MItem>
          <MItem>
            <MImage src={home} />
            <MText>Home</MText>
          </MItem>
          <MItem onClick={toggleTheme}>
            {loaded && theme === 'light' && <MImage src={day} />}
            {loaded && theme === 'dark' && <MImage src={night} />}
            <MText>Theme</MText>
          </MItem>
        </MItems>
      </BottomNav>
    </header>
  )
}

export default Header

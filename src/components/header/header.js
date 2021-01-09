import React from 'react'
import styled from 'styled-components'

const Header = ({ siteTitle, toggleTheme, theme }) => {
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
    @media (max-width: 480px) {
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

  return (
    <header>
      {/* {theme === 'light' && <div onClick={toggleTheme}>dark theme</div>}
      {theme === 'dark' && <div onClick={toggleTheme}>light theme</div>} */}
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
          <MItem></MItem>
          <MItem></MItem>
          <MItem></MItem>
          <MItem></MItem>
          <MItem></MItem>
        </MItems>
      </BottomNav>
    </header>
  )
}

export default Header

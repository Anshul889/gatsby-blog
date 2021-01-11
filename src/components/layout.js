/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { useDarkMode } from './useDarkMode'
import Header from './header/header'
import './layout.css'
import { GlobalStyles } from './globalStyles'
import { lightTheme, darkTheme } from './Themes'
import { ThemeProvider } from 'styled-components'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [theme, toggleTheme] = useDarkMode()

  const isBrowser = () => typeof window !== 'undefined'

  let checker

  if (isBrowser){
    checker = window.localStorage.getItem('theme')
  }

  const themeMode = checker === 'dark' ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Header
          siteTitle={data.site.siteMetadata?.title || `Title`}
          theme={theme}
          toggleTheme={toggleTheme}
        />
        <div>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </footer>
        </div>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { IntlProvider } from "react-intl"
import WOW from "wowjs"
import classNames from "classnames"

import { languages } from "~i18n"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children, isHome, isLogin, lang, i18nMessages }) => {
  useEffect(() => {
    new WOW.WOW().init()
  }, [])

  const defaultLocale = languages.find(language => language.default).locale
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <IntlProvider
      locale={lang}
      defaultLocale={defaultLocale}
      messages={i18nMessages}
    >
      <div className={classNames({ rtl: lang === "ar" })}>
        <Header
          locale={lang}
          siteTitle={data.site.siteMetadata.title}
          isHome={isHome}
          isLogin={isLogin}
        />
        <div className="main">
          <main>{children}</main>
          <Footer isHome={isHome} />
        </div>
      </div>
    </IntlProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
  isLogin: PropTypes.bool,
  lang: PropTypes.oneOf(["ar", "en"]).isRequired,
}

Layout.defaultProps = {
  isHome: false,
  isLogin: false,
}

export default Layout

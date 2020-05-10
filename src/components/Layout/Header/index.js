import PropTypes from "prop-types"
import React, { useState } from "react"
import { Link, navigate } from "gatsby"
import { connect } from "react-redux"
import { FormattedMessage } from "react-intl"
import Headroom from "react-headroom"

import { isLoggedIn } from "~utils/auth"
import { getRedirectUrl } from "~utils/helpers"
import BrowserDatabase from "~utils/BrowserDatabase"
import { duckActions as processDuckActions } from "~state/Process"
import Logo from "~assets/images/logo.svg"

import "./headerStyle.scss"

const Header = ({ isLogin, isHome, locale, setLanguage }) => {
  const [lang, setLang] = useState(locale)

  const handleChange = () => {
    const nextLang = lang === "en" ? "ar" : "en"
    setLang(nextLang)
    if (typeof window !== `undefined`) {
      setLanguage(nextLang)
      BrowserDatabase.setItem(nextLang, "lang", null, true)

      const url =
        nextLang === "en"
          ? location.pathname.replace("/ar", "")
          : `/ar${location.pathname}`
      navigate(url)
    }
  }

  return (
    <Headroom>
      <nav className="navbar navbar-expand-sm" id="navbar">
        <div className="container">
          {!isLogin && (
            <Link to={getRedirectUrl("/")} className="navbar-brand">
              <img src={Logo} alt="Culture" />
            </Link>
          )}
          <div className="navbar-collapse">
            <ul className="navbar-nav ml-auto">
              {isHome && (
                <li className="nav-item">
                  <Link
                    to={
                      isLoggedIn()
                        ? getRedirectUrl("/dashboard")
                        : getRedirectUrl("/login")
                    }
                    className="nav-link btn"
                  >
                    <FormattedMessage
                      id={isLoggedIn() ? "home.Dashboard" : "home.Login"}
                    />
                  </Link>
                </li>
              )}
              <li className="nav-item dropdown">
                <span>
                  <FormattedMessage id="home.Language" />
                </span>
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {lang === "en" ? (
                    <>
                      <span>
                        <FormattedMessage id="home.English" />
                      </span>{" "}
                      (US)
                    </>
                  ) : (
                    <>
                      <span>
                        <FormattedMessage id="home.Arabic" />
                      </span>{" "}
                      (AR)
                    </>
                  )}
                </a>
                <ul className="dropdown-menu sub-menu" onClick={handleChange}>
                  <li className="dropdown-item">
                    <a>
                      <FormattedMessage
                        id={lang === "en" ? "home.Arabic" : "home.English"}
                      />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Headroom>
  )
}

Header.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  isHome: PropTypes.bool.isRequired,
  setLanguage: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  setLanguage: lang => dispatch(processDuckActions.setLang(lang)),
})

export default connect(null, mapDispatchToProps)(Header)

import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import { FormattedMessage } from "react-intl"

const Footer = ({ isHome }) => {
  return (
    <footer className={classNames({ other: !isHome })}>
      <div className="container">
        {isHome && (
          <ul className="list-inline">
            <li className="list-inline-item">
              <a>
                <FormattedMessage id="home.TermsOfUse" />
              </a>
            </li>
            <li className="list-inline-item">
              <a>
                <FormattedMessage id="home.Privacy" />
              </a>
            </li>
            <li className="list-inline-item">
              <a>
                <FormattedMessage id="home.TermsOfSell" />
              </a>
            </li>
          </ul>
        )}
        <p>
          © 2020 shopatculture.com.{" "}
          <FormattedMessage id="home.AllRightsReserved" />
        </p>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  isHome: PropTypes.bool.isRequired,
}

export default Footer

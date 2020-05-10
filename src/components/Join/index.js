import React from "react"
import { Link } from "gatsby"
import { FormattedMessage } from "react-intl"

import { getRedirectUrl } from "~utils/helpers"
import JoinImg from "~assets/images/join-art.svg"

export default function Join() {
  return (
    <section className="join">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="fixed-width">
              <h2 className="section-title wow fadeInUp">
                <FormattedMessage id="home.JoinHeading" />
              </h2>
              <p className="section-desc wow fadeInUp">
                <FormattedMessage id="home.JoinSubHeading" />
              </p>
              <Link
                to={getRedirectUrl("/vendor-registration")}
                className="btn btn-light"
              >
                <FormattedMessage id="home.SignUp" />
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={JoinImg} alt="art" className="img-fluid wow fadeIn" />
          </div>
        </div>
      </div>
    </section>
  )
}

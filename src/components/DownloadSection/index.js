import React from "react"
import { FormattedMessage } from "react-intl"

import GooglePlayImg from "~assets/images/icons/googleplay.svg"
import AppstoreImg from "~assets/images/icons/appstore.svg"
import MockupImg from "~assets/images/mockup.png"

export default function DownloadSection() {
  return (
    <section className="download">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="fixed-width">
              <h2 className="wow fadeInUp">
                <FormattedMessage id="home.DownloadOutMobileApps" />
              </h2>
              <ul className="list-inline download-links">
                <li className="list-inline-item">
                  <a href="">
                    <img src={GooglePlayImg} alt="Google Play" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="">
                    <img src={AppstoreImg} alt="App Store" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src={MockupImg}
              alt="mockup"
              className="img-fluid wow fadeIn"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

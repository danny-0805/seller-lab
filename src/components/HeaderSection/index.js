import React from "react"
import { Link } from "gatsby"
import { FormattedMessage } from "react-intl"

import { getRedirectUrl } from "~utils/helpers"
import Layer1 from "~assets/images/header-layers/layer1.png"
import Layer2 from "~assets/images/header-layers/layer2.png"
import Layer3 from "~assets/images/header-layers/layer3.png"
import Layer4 from "~assets/images/header-layers/layer4.png"
import Layer5 from "~assets/images/header-layers/layer5.png"

export default function HeaderSection() {
  return (
    <header id="home">
      <div className="header-content container">
        <div className="row">
          <div className="col-lg-6">
            <div className="fixed-width">
              <h1 className="wow fadeInUp">
                <FormattedMessage id="home.Heading" />
              </h1>
              <p className="wow fadeInUp">
                <FormattedMessage id="home.SubHeading" />
              </p>
              <Link to={getRedirectUrl("/login")} className="btn wow fadeInUp">
                <FormattedMessage id="home.SignUpNow" />
              </Link>
            </div>
          </div>
          <div className="col-lg-6 layers">
            <img src={Layer1} alt="layer" className="layer layer1" />
            <img src={Layer2} alt="layer" className="layer layer2" />
            <img src={Layer3} alt="layer" className="layer layer3" />
            <img src={Layer4} alt="layer" className="layer layer4" />
            <img src={Layer5} alt="layer" className="layer layer5" />
          </div>
        </div>
      </div>
    </header>
  )
}

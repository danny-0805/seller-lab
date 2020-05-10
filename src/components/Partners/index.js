import React from "react"
import { FormattedMessage } from "react-intl"

import AtreryLogo from "~assets/images/partners/Atrery_Logo.svg"
import MDDesignLogo from "~assets/images/partners/MD_Design_Logo.svg"
import StambaLogo from "~assets/images/partners/Stamba_Logo.svg"
import RezanLogo from "~assets/images/partners/Razan_Alazzounni_-_Logo.svg"
import SashDesignsLogo from "~assets/images/partners/Sash_Designs_Logo.svg"
import AlmahaLogo from "~assets/images/partners/AlMaha_Logo.svg"
import Yasmina from "~assets/images/partners/Yasmina.svg"
import NoufLogo from "~assets/images/partners/Nouf_Alsudairi_Logo.svg"
import FeddaLogo from "~assets/images/partners/Fedda.svg"
import ShahanaLogo from "~assets/images/partners/Shahana_Jamil_Logo.svg"
import DarnonLogo from "~assets/images/partners/darnon.svg"
import BaitLogo from "~assets/images/partners/Bait_Aldantelle_logo.svg"
import NousLogo from "~assets/images/partners/Nous.svg"
import DyedownLogo from "~assets/images/partners/Dyedown_logo.svg"
import DateOilLogo from "~assets/images/partners/date-oil.svg"
import LelasLogo from "~assets/images/partners/lelas.svg"
import SHLogo from "~assets/images/partners/SH-logo-by_copy.svg"
import WilmaLogo from "~assets/images/partners/Wilma_By_Lamya_Logo.svg"
import KholoudLogo from "~assets/images/partners/kholoud_alajaji_logo_copy.svg"

export default function Partners() {
  return (
    <section className="partners">
      <div className="container">
        <h2 className="section-title text-center">
          <FormattedMessage id="home.OurPartners" />
        </h2>
        <div className="partners-list">
          <div>
            <div className="partner-card wow fadeIn">
              <img src={AtreryLogo} alt="partner logo" className="img-fluid" />
            </div>
          </div>
          <div>
            <div className="partner-card wow fadeIn">
              <img
                src={MDDesignLogo}
                alt="partner logo"
                className="img-fluid"
              />
            </div>
          </div>
          <div>
            <div className="partner-card">
              <img src={StambaLogo} alt="partner logo" className="img-fluid" />
            </div>
          </div>
          <div>
            <div className="partner-card wow fadeIn">
              <img src={RezanLogo} alt="partner logo" className="img-fluid" />
            </div>
          </div>
          <div>
            <div className="partner-card wow fadeIn">
              <img
                src={SashDesignsLogo}
                alt="partner logo"
                className="img-fluid"
              />
            </div>
          </div>
          <div>
            <div className="partner-card wow fadeIn">
              <img src={AlmahaLogo} alt="partner logo" className="img-fluid" />
            </div>
          </div>
          <div>
            <div className="partner-card wow fadeIn">
              <img src={Yasmina} alt="partner logo" className="img-fluid" />
            </div>
          </div>
          <div>
            <div className="partner-card wow fadeIn">
              <img src={NoufLogo} alt="partner logo" className="img-fluid" />
            </div>
          </div>
          <div>
            <div className="partner-card wow fadeIn">
              <img src={FeddaLogo} alt="partner logo" className="img-fluid" />
            </div>
          </div>
          <div>
            <div className="partner-card wow fadeIn">
              <img src={ShahanaLogo} alt="partner logo" className="img-fluid" />
            </div>
          </div>
          <div>
            <div className="partner-card wow fadeIn">
              <img src={DarnonLogo} alt="partner logo" className="img-fluid" />
            </div>
          </div>
          <div>
            <div className="partner-card wow fadeIn">
              <img src={BaitLogo} alt="partner logo" className="img-fluid" />
            </div>
          </div>
          <div>
            <div className="partner-card wow fadeIn">
              <img src={NousLogo} alt="partner logo" className="img-fluid" />
            </div>
          </div>
          <div>
            <div className="partner-card wow fadeIn">
              <img src={DyedownLogo} alt="partner logo" className="img-fluid" />
            </div>
          </div>
          <div>
            <div className="partner-card wow fadeIn">
              <img src={DateOilLogo} alt="partner logo" className="img-fluid" />
            </div>
          </div>
          <div>
            <div className="partner-card wow fadeIn">
              <img src={LelasLogo} alt="partner logo" className="img-fluid" />
            </div>
          </div>
          <div>
            <div className="partner-card wow fadeIn">
              <img src={SHLogo} alt="partner logo" className="img-fluid" />
            </div>
          </div>
          <div>
            <div className="partner-card wow fadeIn">
              <img src={WilmaLogo} alt="partner logo" className="img-fluid" />
            </div>
          </div>
          <div>
            <div className="partner-card wow fadeIn">
              <img src={KholoudLogo} alt="partner logo" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

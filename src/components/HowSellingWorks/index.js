import React from "react"
import { FormattedMessage } from "react-intl"

import ListImg from "~assets/images/icons/list.svg"
import BuyerImg from "~assets/images/icons/buyer.svg"
import PackImg from "~assets/images/icons/pack.svg"
import CourierImg from "~assets/images/icons/courier.svg"
import ReachImg from "~assets/images/icons/reach.svg"
import PaidImg from "~assets/images/icons/paid.svg"

export default function HowSellingWorks() {
  return (
    <section>
      <div className="container">
        <h2 className="section-title text-center">
          <FormattedMessage id="home.HowSellingWorks" />
        </h2>
        <div className="row">
          <div className="col-sm-6 col-lg-4">
            <div className="card usage-card wow fadeIn">
              <div className="card-header">
                <img src={ListImg} alt="img-fluid" />
              </div>
              <div className="card-body">List your product on Culture</div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="card usage-card wow fadeIn">
              <div className="card-header">
                <img src={BuyerImg} alt="img-fluid" />
              </div>
              <div className="card-body">buyer orders one of your products</div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="card usage-card wow fadeIn">
              <div className="card-header">
                <img src={PackImg} alt="img-fluid" />
              </div>
              <div className="card-body">
                Pack and prepare to ship this order
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="card usage-card wow fadeIn">
              <div className="card-header">
                <img src={CourierImg} alt="img-fluid" />
              </div>
              <div className="card-body">
                Courier picks it up and delivers it to Buyer
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="card usage-card wow fadeIn">
              <div className="card-header">
                <img src={ReachImg} alt="img-fluid" />
              </div>
              <div className="card-body">Reach millions of customers</div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="card usage-card wow fadeIn">
              <div className="card-header">
                <img src={PaidImg} alt="img-fluid" />
              </div>
              <div className="card-body">you get paid through Our website</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import React, { useState } from "react"
import { FormattedMessage } from "react-intl"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import { Accordion, Card } from "react-bootstrap"

import WhySellImg from "~assets/images/whysell.svg"

export default function WhySell() {
  const [active, setActive] = useState(null)

  const handleCollapse = index => {
    setActive(index === active ? null : index)
  }

  return (
    <section className="why-sell">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img
              src={WhySellImg}
              alt="art"
              className="img-fluid wow fadeIn d-block mt-5 mb-3"
            />
          </div>
          <div className="col-lg-6">
            <div className="fixed-width">
              <h2 className="section-title wow fadeInUp">
                <FormattedMessage id="home.WhySellHeading" />
              </h2>
              <p className="section-desc wow fadeInUp">
                <FormattedMessage id="home.WhySellSubHeading" />
              </p>
              <Accordion>
                <div className="card">
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    <button
                      className="btn btn-link"
                      type="button"
                      onClick={() => handleCollapse(0)}
                    >
                      One Line Accordion
                      <span className="icon-box">
                        <FontAwesomeIcon
                          icon={active === 0 ? faMinus : faPlus}
                        />
                      </span>
                    </button>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="0">
                    <div className="card-body">
                      Start selling where millions of customers are shopping
                      every day. You’re just a few steps away from becoming a
                      seller on Balleh.com
                    </div>
                  </Accordion.Collapse>
                </div>
                <div className="card">
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                    <button
                      className="btn btn-link collapsed"
                      type="button"
                      onClick={() => handleCollapse(1)}
                    >
                      2 Line Accordion
                      <span className="icon-box">
                        <FontAwesomeIcon
                          icon={active === 1 ? faMinus : faPlus}
                        />
                      </span>
                    </button>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <div className="card-body">
                      Start selling where millions of customers are shopping
                      every day. You’re just a few steps away from becoming a
                      seller on Balleh.com
                    </div>
                  </Accordion.Collapse>
                </div>
                <div className="card">
                  <Accordion.Toggle as={Card.Header} eventKey="2">
                    <button
                      className="btn btn-link collapsed"
                      type="button"
                      onClick={() => handleCollapse(2)}
                    >
                      3 Line Accordion
                      <span className="icon-box">
                        <FontAwesomeIcon
                          icon={active === 2 ? faMinus : faPlus}
                        />
                      </span>
                    </button>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="2">
                    <div className="card-body">
                      Start selling where millions of customers are shopping
                      every day. You’re just a few steps away from becoming a
                      seller on Balleh.com
                    </div>
                  </Accordion.Collapse>
                </div>
                <div className="card">
                  <Accordion.Toggle as={Card.Header} eventKey="3">
                    <button
                      className="btn btn-link collapsed"
                      type="button"
                      onClick={() => handleCollapse(3)}
                    >
                      4 Line Accordion
                      <span className="icon-box">
                        <FontAwesomeIcon
                          icon={active === 3 ? faMinus : faPlus}
                        />
                      </span>
                    </button>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="3">
                    <div className="card-body">
                      Start selling where millions of customers are shopping
                      every day. You’re just a few steps away from becoming a
                      seller on Balleh.com
                    </div>
                  </Accordion.Collapse>
                </div>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

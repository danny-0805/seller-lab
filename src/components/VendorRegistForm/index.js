import React, { useState } from "react"
import classNames from "classnames"
import { Link } from "gatsby"
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"

import { getRedirectUrl } from "~utils/helpers"
import Saudi from "~assets/images/icons/saudi.svg"
import Egypt from "~assets/images/icons/egypt.svg"
import China from "~assets/images/icons/china.svg"
import UAE from "~assets/images/icons/UAE.svg"
import pdfImg from "~assets/images/icons/pdf.svg"

export default function VendorRegistForm() {
  const [step, setStep] = useState(0)

  const handleChangeTab = tab => {
    console.log("tab", tab)
    if (tab < step) {
      setStep(tab)
    }
  }

  const handleNext = () => {
    setStep(step + 1)
  }

  const validationSchema = () => {
    if (step === 0) {
      return Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .min(7, "Must be 7 characters or less")
          .required("Required"),
      })
    } else if (step === 1) {
      return Yup.object({
        email: Yup.string(),
        password: Yup.string()
          .min(7, "Must be 7 characters or less")
          .required("Required"),
      })
    } else {
      return null
    }
  }

  return (
    <section className="no-layout text-center">
      <div className="container">
        <Formik
          initialValues={{
            email: "test@test.com",
            password: "123123123",
            saudi: false,
            egypt: false,
            china: false,
            uae: false,
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              setSubmitting(false)
              handleNext()
            }, 400)
          }}
        >
          <Form className="form form-wizard">
            <h2 className="section-title text-center">Vendor Registration</h2>
            <nav>
              <ul>
                <li>
                  <a
                    onClick={() => handleChangeTab(0)}
                    className={classNames("wizard-link", {
                      active: step === 0,
                      done: step > 0,
                    })}
                  >
                    Login
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => handleChangeTab(1)}
                    className={classNames("wizard-link", {
                      active: step === 1,
                      done: step > 1,
                    })}
                  >
                    Country
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => handleChangeTab(2)}
                    className={classNames("wizard-link", {
                      active: step === 2,
                      done: step > 2,
                    })}
                  >
                    Store
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => handleChangeTab(3)}
                    className={classNames("wizard-link", {
                      active: step === 3,
                      done: step > 3,
                    })}
                  >
                    Documents
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => handleChangeTab(4)}
                    className={classNames("wizard-link", {
                      active: step === 4,
                      done: step > 4,
                    })}
                  >
                    Bank
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => handleChangeTab(5)}
                    className={classNames("wizard-link", {
                      active: step === 5,
                      done: step > 5,
                    })}
                  >
                    Catalog
                  </a>
                </li>
              </ul>
            </nav>
            <div className="wizard-content">
              {step === 0 && (
                <div className="wizard-panel" id="panel1">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Field
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="Enter Email Address"
                    />
                    <ErrorMessage name="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Field
                      name="password"
                      type="password"
                      className="form-control"
                      placeholder="Enter Password"
                    />
                    <ErrorMessage name="password" />
                  </div>
                  <a href="" className="float-right">
                    Forgot Password?
                  </a>
                  <button
                    type="submit"
                    className="btn btn-block btn-light btn-next"
                  >
                    sign in
                  </button>
                  <div className="text-center">
                    <p className="note">Don’t have an Account?</p>
                    <a href="" className="link">
                      Sign up
                    </a>
                  </div>
                </div>
              )}
              {step === 1 && (
                <div className="wizard-panel" id="panel2">
                  <p className="panel-title">Where is your Business Located?</p>
                  <div className="custom-control custom-switch">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customSwitch1"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customSwitch1"
                    >
                      <img src={Saudi} alt="Saudi Arab" />
                      Saudi Arab
                    </label>
                  </div>
                  <div className="custom-control custom-switch">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customSwitch2"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customSwitch2"
                    >
                      <img src={Egypt} alt="Egypt" />
                      Egypt
                    </label>
                  </div>
                  <div className="custom-control custom-switch">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customSwitch3"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customSwitch3"
                    >
                      <img src={China} alt="China" />
                      China
                    </label>
                  </div>
                  <div className="custom-control custom-switch">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customSwitch4"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customSwitch4"
                    >
                      <img src={UAE} alt="UAE" />
                      UAE
                    </label>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <button
                        type="button"
                        onClick={() => handleChangeTab(0)}
                        className="btn btn-block btn-back"
                      >
                        back
                      </button>
                    </div>
                    <div className="col-6">
                      <button
                        type="submit"
                        className="btn btn-block btn-light btn-next"
                      >
                        next
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {step === 2 && (
                <div className="wizard-panel" id="panel3">
                  <div className="form-group">
                    <label htmlFor="">Email *</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email Address"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">What’s your Store Name? *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Store Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Company Legal Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Company Legal Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">
                      What kind of Product do you sell? *
                    </label>
                    <select className="custom-select multi-select">
                      <option>product1</option>
                      <option>product2</option>
                      <option>product3</option>
                    </select>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="">Country</label>
                        <select className="custom-select" defaultValue="enter">
                          <option value="enter">Enter Country</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="">City</label>
                        <select className="custom-select" defaultValue="enter">
                          <option value="enter">Enter City</option>
                          <option value="1">CityOne</option>
                          <option value="2">CityTwo</option>
                          <option value="3">CityThree</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className="form-control"
                      placeholder="Enter Phone Number"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Enter Full Address *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Full Address "
                    />
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="">Facebook</label>
                        <input
                          type="url"
                          className="form-control"
                          placeholder="Enter Url here "
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="">Twitter</label>
                        <input
                          type="url"
                          className="form-control"
                          placeholder="Enter Url here "
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="">Instagram</label>
                        <input
                          type="url"
                          className="form-control"
                          placeholder="Enter Url here "
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="">Snapchat</label>
                        <input
                          type="url"
                          className="form-control"
                          placeholder="Enter Url here "
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <button
                        type="button"
                        onClick={() => handleChangeTab(1)}
                        className="btn btn-block btn-back"
                      >
                        back
                      </button>
                    </div>
                    <div className="col-6">
                      <button
                        type="button"
                        onClick={handleNext}
                        className="btn btn-block btn-light btn-next"
                      >
                        next
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {step === 3 && (
                <div className="wizard-panel" id="panel4">
                  <div className="file">
                    <img src={pdfImg} alt="pdf" />
                  </div>
                  <p className="field-title">Upload Trade License</p>
                  <div className="form-group input-file">
                    <input type="file" hidden id="file1" />
                    <label htmlFor="file1" className="input-file-label">
                      Upload files
                    </label>
                    <br />
                    <span className="file-name"></span>
                    <span className="file-size"></span>
                  </div>
                  <div className="file">
                    <img src={pdfImg} alt="pdf" />
                  </div>
                  <p className="field-title">Upload Trade License</p>
                  <div className="form-group input-file">
                    <input type="file" hidden id="file2" />
                    <label htmlFor="file2" className="input-file-label">
                      Upload files
                    </label>
                    <br />
                    <span className="file-name"></span>
                    <span className="file-size"></span>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <button
                        type="button"
                        onClick={() => handleChangeTab(2)}
                        className="btn btn-block btn-back"
                      >
                        back
                      </button>
                    </div>
                    <div className="col-6">
                      <button
                        type="button"
                        onClick={handleNext}
                        className="btn btn-block btn-light btn-next"
                      >
                        next
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {step === 4 && (
                <div className="wizard-panel" id="panel5">
                  <div className="form-group">
                    <label htmlFor="">Beneficiary Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Beneficiary Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Bank Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Bank Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Branch Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Branch Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Account Number *</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter Account Number"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">IBAN Number *</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter IBAN Number"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">SWIFT Code *</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter SWIFT Code"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Currency *</label>
                    <select className="custom-select" defaultValue="select">
                      <option value="select">Choose Currency</option>
                      <option value="usd">USD</option>
                      <option value="eur">EUR</option>
                    </select>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <button
                        type="button"
                        onClick={() => handleChangeTab(3)}
                        className="btn btn-block btn-back"
                      >
                        back
                      </button>
                    </div>
                    <div className="col-6">
                      <button
                        type="button"
                        onClick={handleNext}
                        className="btn btn-block btn-light btn-next"
                      >
                        next
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {step === 5 && (
                <div className="wizard-panel" id="panel6">
                  <div className="file">
                    <img src={pdfImg} alt="pdf" />
                  </div>
                  <p className="field-title">Upload Pdf Files here</p>
                  <p>(Emirates ID, Saudi Iqama or Passport copy with VISA)</p>
                  <div className="form-group input-file">
                    <input type="file" hidden id="file3" />
                    <label htmlFor="file3" className="input-file-label">
                      Upload files
                    </label>
                    <br />
                    <span className="file-name"></span>
                    <span className="file-size"></span>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <button
                        type="button"
                        onClick={() => handleChangeTab(4)}
                        className="btn btn-block btn-back"
                      >
                        back
                      </button>
                    </div>
                    <div className="col-6">
                      <button
                        type="button"
                        onClick={handleNext}
                        className="btn btn-block btn-light btn-submit"
                      >
                        next
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {step === 6 && (
                <div className="wizard-panel success-panel" id="panel7">
                  <div className="success-checkmark">
                    <div className="check-icon">
                      <span className="icon-line line-tip"></span>
                      <span className="icon-line line-long"></span>
                      <div className="icon-circle"></div>
                      <div className="icon-fix"></div>
                    </div>
                  </div>
                  <h3 className="field-title">Thank You!</h3>
                  <p>
                    We have received your store creation Request. Please Allow
                    us up to 48 hourrs to verify your documents and confirm your
                    store creation request
                  </p>
                  <p>
                    We have received your store creation Request. Please Allow
                    us up to 48 hourrs to verify your documents and confirm your
                    store creation request
                  </p>
                  <Link to={getRedirectUrl("/")} className="link">
                    Go back to Home
                  </Link>
                </div>
              )}
            </div>
          </Form>
        </Formik>
      </div>
    </section>
  )
}

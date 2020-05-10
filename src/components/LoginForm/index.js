import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { useFormik } from "formik"
import * as Yup from "yup"
import BeatLoader from "react-spinners/BeatLoader"
import { FormattedMessage } from "react-intl"

import { getRedirectUrl } from "~utils/helpers"
import { duckActions as authDuckActions } from "~state/Auth"
import { duckActions as processDuckActions } from "~state/Process"
import Logo from "~assets/images/logo.svg"

const LoginForm = props => {
  const [rememberFlag, setRememberFlag] = useState(false)

  const isValid = (touched, flag, fieldNum) =>
    Object.keys(touched).length === fieldNum && flag

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(7, "Must be 7 characters or less")
        .required("Required"),
    }),
    onSubmit: values => {
      handleLogin(values)
    },
  })

  const handleChange = e => {
    const name = e.target.name
    const value = e.target.value

    formik.setFieldValue(name, value)
    setTimeout(() => formik.setFieldTouched(name, true))
  }

  const handleLogin = values => {
    const loginInfo = {
      identity: values.email,
      password: values.password,
      device_token:
        "dfB6htWQ5eI:APA91bEAXupTzZIBNkX7zDFPo27oZUpSGPbBIjcA4M23T-TfoniZhGBSAA0qvwNsVLdiUXDgFusxoQ7o9XDzdQhr2MsRqXzzlI-ULaDNdy2Yh2DaJWoQ1-sS4UAPgdoZHuZ_vkAgq2",
      type: "local",
    }

    props.onDoLogin({ loginInfo, rememberFlag })
  }

  return (
    <section className="no-layout text-center">
      <div className="container">
        <Link to={getRedirectUrl("/")} className="brand">
          <img src={Logo} alt="Culture" />
        </Link>
        <p className="intro">
          <FormattedMessage id="login.Title" />
        </p>
        <form onSubmit={formik.handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="email">
              <FormattedMessage id="login.Email" />
            </label>
            <input
              className="form-control"
              placeholder="Enter Email Address"
              id="email"
              name="email"
              type="email"
              onChange={handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <FormattedMessage id="login.Password" />
            </label>
            <input
              className="form-control"
              placeholder="Enter Password"
              id="password"
              name="password"
              type="password"
              onChange={handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />

            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="custom-control custom-checkbox custom-control-inline form-group">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
              checked={rememberFlag}
              onChange={() => setRememberFlag(!rememberFlag)}
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              <FormattedMessage id="login.RememberMe" />
            </label>
          </div>
          <a href="" className="float-right">
            <FormattedMessage id="login.ForgotPassword" />
          </a>
          <button
            disabled={
              props.loading || !isValid(formik.touched, formik.isValid, 2)
            }
            className="btn btn-block btn-light"
          >
            {props.loading ? (
              <BeatLoader size={10} color={"#232122"} loading={true} />
            ) : (
              <FormattedMessage id="login.SignIn" />
            )}
          </button>
        </form>
      </div>
    </section>
  )
}

LoginForm.propsType = {
  onDoLogin: PropTypes.func.isRequired,
}

const mapStateToProps = ({ process }) => ({
  loading: process.loading,
})

const mapDispatchToProps = dispatch => ({
  onDoLogin: user => dispatch(authDuckActions.doLogin(user)),
  setLoadingStatus: flag => dispatch(processDuckActions.setLoadingStatus(flag)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)

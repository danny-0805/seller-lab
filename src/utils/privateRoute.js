import React from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"
import { isLoggedIn } from "./auth"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (!isLoggedIn() && location.pathname !== `/login`) {
    navigate(`/login`)
    return null
  }
  return <Component {...rest} />
}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
}

export default PrivateRoute

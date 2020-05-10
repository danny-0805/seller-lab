import flatten from "flat"

import error404 from "./404"
import home from "./home"
import resetPassword from "./resetPassword"
import error from "./error"
import register from "./register"
import login from "./login"
import footer from "./footer"

const messages = {
  error404,
  home,
  resetPassword,
  error,
  register,
  login,
  footer,
}

export default flatten(messages)

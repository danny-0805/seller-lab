import * as api from "~api"
import { setAuthHeader } from "~api/apiCore"
import { showSuccessToaster, showInfoToaster } from "~utils/helpers"
import BrowserDatabase from "~utils/BrowserDatabase"
import { SET_USER } from "./types"
import { duckActions as processDuckActions } from "~state/Process"

const setUser = payload => ({
  type: SET_USER,
  payload,
})

const storeUserDataToLocal = (data, persistFlag) => {
  setAuthHeader(`Bearer ${data.customerData.token}`)
  if (typeof window !== `undefined`) {
    BrowserDatabase.setItem(data.customerData, "user", null, persistFlag)
    BrowserDatabase.setItem(true, "auth", null, persistFlag)
  }
}

export const doLogin = payload => dispatch => {
  const defaultMessage = "There is no customer with this email/phone."
  const defaultSuccessMessage = "You are now logged in."

  dispatch(processDuckActions.setLoadingStatus(true))
  api.postLogin(payload.loginInfo).then(res => {
    dispatch(processDuckActions.setLoadingStatus(false))
    if (!res.hasError) {
      if (!res[0].message) {
        showSuccessToaster(defaultSuccessMessage)
        dispatch(setUser(res[0]))
        storeUserDataToLocal(res[0], payload.rememberFlag)
      } else {
        showInfoToaster(res.message || defaultMessage)
      }
    } else {
      console.log(res)
    }
  })
}

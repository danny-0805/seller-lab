import cogoToast from "cogo-toast"
import { detectLocale } from "~i18n"

const TOAST_OPTIONS = {
  position: "top-right",
  hideAfter: 3,
}

export const log = value => console.log(value) // eslint-disable-line

const defaultOtherErrorMessage =
  "Unknown Error: Please refer the console logs for more details on the error."
export const showErrorToaster = (
  error,
  otherMessage = defaultOtherErrorMessage
) => {
  if (error && error.response) {
    if (error.response.data) {
      if (error.response.data.error) {
        cogoToast.error(error.response.data.error, TOAST_OPTIONS)
      } else if (error.response.data.message) {
        cogoToast.error(error.response.data.message, TOAST_OPTIONS)
      } else {
        cogoToast.error(error.response.data, TOAST_OPTIONS)
      }
    } else {
      cogoToast.error(error.response, TOAST_OPTIONS)
    }
  } else {
    cogoToast.error(otherMessage, TOAST_OPTIONS)
  }
}

export const getRedirectUrl = (url, lang) => {
  const currentLang = !!lang ? lang : detectLocale()

  return currentLang === "en" ? url : `/ar${url}`
}

export const showSuccessToaster = successMessage =>
  cogoToast.success(successMessage, TOAST_OPTIONS)
export const showInfoToaster = infoMessage =>
  cogoToast.info(infoMessage, TOAST_OPTIONS)
export const showWarnToaster = warnMessage =>
  cogoToast.warn(warnMessage, TOAST_OPTIONS)

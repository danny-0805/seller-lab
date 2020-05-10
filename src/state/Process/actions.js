import { SET_LOADING_STATUS, SET_LANG } from "./types"

export const setLoadingStatus = payload => ({
  type: SET_LOADING_STATUS,
  payload,
})

export const setLang = payload => ({
  type: SET_LANG,
  payload,
})

import BrowserDatabase from "~utils/BrowserDatabase"
import { SET_LOADING_STATUS, SET_LANG } from "./types"

const initialState = {
  loading: false,
  lang: BrowserDatabase.getItem("lang") || "en",
}

const processReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_STATUS:
      return {
        ...state,
        loading: action.payload,
      }
    case SET_LANG:
      return {
        ...state,
        lang: action.payload,
      }
    default:
      return state
  }
}

export default processReducer

import BrowserDatabase from "~utils/BrowserDatabase"
import { SET_USER } from "./types"

const initialState = {
  user: BrowserDatabase.getItem("auth") ? BrowserDatabase.getItem("user") : {},
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      }
    default:
      return state
  }
}

export default authReducer

import { combineReducers } from "redux"
import auth from "./Auth"
import process from "./Process"

export default combineReducers({
  auth,
  process,
})

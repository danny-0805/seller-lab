import {
  createStore as reduxCreateStore,
  applyMiddleware,
  compose,
} from "redux"
import reducers from "./reducers"
import thunk from "redux-thunk"

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // NOTE: Specify extension's options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose

const createStore = () =>
  reduxCreateStore(reducers, composeEnhancers(applyMiddleware(thunk)))
export default createStore

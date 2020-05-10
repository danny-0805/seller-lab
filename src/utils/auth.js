import idx from "idx"
import BrowserDatabase from "./BrowserDatabase"

const isBrowser = typeof window !== `undefined`

const getUser = () =>
  isBrowser && BrowserDatabase.getItem("user")
    ? BrowserDatabase.getItem("user")
    : {}

export const isLoggedIn = () => {
  if (!isBrowser) return false

  const user = getUser()
  return !!idx(user, _ => _.email)
}

export const getCurrentUser = () => isBrowser && getUser()

export const logout = () => {
  if (!isBrowser) return
  BrowserDatabase.deleteItem("user")
  BrowserDatabase.deleteItem("auth")
}

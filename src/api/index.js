import * as url from "./url"
import { post } from "./apiCore"

export const postLogin = data => post(url.POST_LOGIN, data)

import languages from "./languages"
import BrowserDatabase from "~utils/BrowserDatabase"

export const defaultLang = languages.find(language => language.default).locale
export const detectLocale = () => BrowserDatabase.getItem("lang") || defaultLang

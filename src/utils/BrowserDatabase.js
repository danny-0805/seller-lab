// TODO: maybe consider moving to IndexedDB insead of localStorage

class BrowserDatabase {
  getItem(location) {
    try {
      const entryObject = JSON.parse(
        localStorage.getItem(location) || sessionStorage.getItem(location)
      )
      const { data, expiration, createdAt } = entryObject
      const MILLISECONDS_TO_SECONDS = 1000

      if (
        expiration &&
        Date.now() - createdAt > expiration * MILLISECONDS_TO_SECONDS
      ) {
        localStorage.removeItem(location)
        sessionStorage.removeItem(location)
        return null
      }

      return data || entryObject
    } catch {
      return null
    }
  }

  setItem(data, location, expiration, persistFlag = false) {
    if (typeof window !== "undefined") {
      if (persistFlag) {
        localStorage.setItem(
          location,
          JSON.stringify({
            data,
            expiration,
            createdAt: Date.now(),
          })
        )
      } else {
        sessionStorage.setItem(
          location,
          JSON.stringify({
            data,
            expiration,
            createdAt: Date.now(),
          })
        )
      }
    }
  }

  deleteItem(location) {
    if (typeof window !== `undefined`) {
      localStorage.removeItem(location)
      sessionStorage.removeItem(location)
    }
  }
}

export default new BrowserDatabase()

const strageKey = "test_local_20181112212735"

export default {
  setLocalStrage: value => {
    const jsonValue = JSON.stringify(value)
    localStorage.setItem(strageKey, jsonValue)
  },
  getLocalStrage: () => {
    const jsonVal = localStorage.getItem(strageKey)
    return JSON.parse(jsonVal) || []
  }
}

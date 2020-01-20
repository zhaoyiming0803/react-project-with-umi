export function getUserInfo () {
  try {
    return JSON.parse(window.localStorage.userInfo)
  } catch (e) {
    return {}
  }
}

export function setUserInfo (Uid, Token) {
  window.localStorage.userInfo = JSON.stringify({ Uid, Token })
}


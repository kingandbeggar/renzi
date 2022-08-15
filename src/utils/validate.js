/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
// 校验手机号
export function validUsermobile(str) {
  const reg = /^1[3-9]\d{9}$/
  return reg.test(str.trim())
}

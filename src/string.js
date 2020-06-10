"use strict"
/**
 * String helpers
 */
const my = exports

/* Library */

/**
 * Return `string` with first letter capitalized.
 *
 * @param {String} string
 * @return {String}
 */
my.capitalize = function (string) {
  return string.substr(0, 1).toUpperCase() + string.slice(1)
}

/**
 * Returns a shortified **string** if it is longer than **max** characters; else
 * return **string**.
 *
 * @param {String} string
 * @param {Number} [max=50] - The maximum length for **string**.
 * @return {String}
 */
my.shorter = function (string, max = 50) {
  if (string.length > max) {
    return `${string.substr(0, 5)}...${string.substr(-5)}`
  } else {
    return string
  }
}

/**
 * Test if **string** is made of printable UTF8 characters. This is a simplified
 * test that has a small probability to return false positive.
 *
 * @param {String}
 * @return {Boolean}
 */
my.isUtf8 = function (string) {
  // eslint-disable-next-line no-control-regex
  return !string.match(/[\0-\x1F\x7F-\x9F\xAD\uD7FC-\uF8FF]/)
}

/**
 * Test if **string** made of base64 characters.
 *s
 * @param  {String} string
 * @return {Boolean}
 */
my.isBase64 = function (string) {
  return !!string.match(/^[0-9a-zA-Z+/]*=*$/)
}

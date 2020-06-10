"use function"
/**
 * Date helpers
 */
const my = exports

/* Library */

/**
 * Return the YYYY-MM-DD date for **time** or for today if **time** is not
 * provided.
 *
 * @param {String|Number} [time] A valid date/timestamp value
 * @return {String} YYYY-MM-DD date
 */
my.day = function (time) {
  const date = time ? new Date(time) : new Date()
  return date.toISOString().replace(/T.*/, "")
}

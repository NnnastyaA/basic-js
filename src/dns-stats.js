const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainCount = {};

  domains.forEach(domain => {
    const domainParts = domain.split('.');

    let currentDomain = '';

    for (let i = domainParts.length - 1; i >= 0; i--) {
      currentDomain = currentDomain + '.' + domainParts[i];
      domainCount[currentDomain] = (domainCount[currentDomain] || 0) + 1;
    }
  });

  return domainCount;
}
module.exports = {
  getDNSStats
};

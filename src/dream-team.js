const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let summaryLine = '';
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === "string" && members[i].replace(/ /g, '').length > 0) {
      members[i] = members[i].replace(/ /g, '');
      let firstLetter = members[i][0];
      firstLetter = firstLetter.toUpperCase();
      summaryLine = summaryLine + firstLetter;
    }
  }
  return summaryLine.split('').sort().join('');
}

module.exports = {
  createDreamTeam
};

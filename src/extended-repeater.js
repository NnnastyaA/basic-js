const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // Set default values for options if not provided
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;

  // Convert null to an empty string
  const mainString = str === null ? 'null' : String(str);
  const additionString = addition === null ? 'null' : String(addition);

  // Repeat the addition string with the specified options
  const repeatedAddition = new Array(additionRepeatTimes).fill(additionString).join(additionSeparator);

  // Repeat the main string with the specified options, including the repeated addition
  const repeatedString = new Array(repeatTimes).fill(mainString + repeatedAddition).join(separator);

  return repeatedString;
}

module.exports = {
  repeater
};

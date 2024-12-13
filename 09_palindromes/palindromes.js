const palindromes = function (word) {
  let comparator = word.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`\s{|}~]/g, '').toLowerCase();
  const reversed = word.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`\s{|}~]/g, '').toLowerCase().split('').reverse().join('');
  return (comparator === reversed);
};

// Do not edit below this line
module.exports = palindromes;

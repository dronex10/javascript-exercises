const fibonacci = function(num) {
  if (num < 0) {
    return "OOPS"
  }
  num = Number(num);
  let curr = 1;
  let last = 0;
  for (let i = 0; i < num; i++) {
    let newLast = curr;
    curr += last;
    last = newLast;
  }
  return last;
};

// Do not edit below this line
module.exports = fibonacci;

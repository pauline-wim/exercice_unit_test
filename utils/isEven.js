const isEven = (n) => {
  if (n % 2 === 0) {
    return true;
  } else if (!isNaN(parseFloat(n)) && n % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = isEven;

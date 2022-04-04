const isEven = (n) => {
  if (n % 2 === 0) {
    return true;
  }
  if (!isNaN(parseFloat(n)) && isFinite(n)) {
    return true;
  } else {
    return false;
  }
};

module.exports = isEven;

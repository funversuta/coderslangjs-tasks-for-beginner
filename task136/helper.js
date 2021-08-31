export const getTotal = (arr) => {
  return arr.reduce(function(total, value) {
      return total + value;
  }, 0);
};
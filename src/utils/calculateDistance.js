const calculateDistance = (point1, point2) => Math
  .sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));

const calculateTotalDistance = (route) => route.reduce((acc, curr, index) => (
  index === route.length - 1 ? acc : acc + calculateDistance(curr, route[index + 1])
), 0);

module.exports = { calculateDistance, calculateTotalDistance };
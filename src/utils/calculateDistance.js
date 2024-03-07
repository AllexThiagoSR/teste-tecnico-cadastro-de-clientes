const calculateDistance = (point1, point2) => {
  return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
};

const calculateTotalDistance = (route, points) => {
  let totalDistance = 0;
  for (let i = 0; i < route.length - 1; i += 1) {
      totalDistance += calculateDistance(points[route[i]], points[route[i + 1]]);
  }
  return totalDistance;
}

module.exports = { calculateDistance, calculateTotalDistance };
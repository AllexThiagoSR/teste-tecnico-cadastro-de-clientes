const { calculateTotalDistance } = require("./calculateDistance");

module.exports = (route) => {
  let improved = true;
  while (improved) {
    improved = false;
    for (let i = 1; i < route.length - 2; i += 1) {
      for (let j = i + 1; j < route.length; j += 1) {
        if (j - i === 1) continue;
        const newRoute = [...route.slice(0, i), ...route.slice(i, j).reverse(), ...route.slice(j)];
        const newRouteDistance = calculateTotalDistance(newRoute);
        if (newRouteDistance < calculateTotalDistance(route)) {
          route = newRoute;
          improved = true;
        }
      }
    }
  }

  return route;
}
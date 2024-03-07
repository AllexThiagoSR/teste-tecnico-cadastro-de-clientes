const { calculateDistance } = require("./calculateDistance");

module.exports = (points) => {
  const indices = Array.from({ length: points.length }, (_, i) => i);
  const visited = new Set(); // Pontos já visitados
  const route = [points[0]]; // Indica a empresa o ponto 0

  while (visited.size < points.length - 1) { // Equanto não forem visitados todos os pontos será executado esse loop
    let currentPoint = route[route.length - 1]; // O ponto em que está agora
    let nearestNeighbor = 0; // Valor inicial do vizinho mais próximo
    let minDistance = Infinity; // Valor de distância mínima que é infinito já que é o primeiro

    for (const index of indices) { // vai rodar um loop para cada indice do array de pontos
      const isTheSamePoint = points[index].id === currentPoint.id;
      if (!visited.has(index) && !isTheSamePoint) { // Se o ponto não visitado ainda e não for igual ao ponto de indice igual a index
        const distance = calculateDistance(currentPoint, points[index]); // Calcula a distância entre o ponto atual e o ponto que estamos analizando
        if (distance < minDistance) { // Se a distância for menor que a distância mínima do loop while atual
          minDistance = distance; // Salva ela como nova distância mínima
          nearestNeighbor = index; // Salva o indice como o indice do vizinho mais próximo
        }
      }
    }
    route.push(points[nearestNeighbor]); // Adiciona o ponto na rota
    visited.add(nearestNeighbor); // Adiciona o ponto como ponto já visitado
  }
  return route;
}
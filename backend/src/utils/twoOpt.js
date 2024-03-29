const { calculateTotalDistance } = require("./calculateDistance");

module.exports = (route) => {
  let routeWithFinalPoint = [...route, { id: 0, name: 'Empresa', x: 0, y: 0 }]
  let decreased = true; // Variável para indicar se o tamanho da rota diminuiu ou não
  while (decreased) { // Enquanto ocorrer alguma diminuição no tamanho da rota o loop será executado
    decreased = false; // Muda para falso para caso ocorro uma diminuição seja mudada para true, caso não o loop será encerrado pois o algoritmo entende que não há mais melhorias para serem feitas
    for (let i = 1; i < routeWithFinalPoint.length - 2; i += 1) { // Loop que evita o ultimo ponto e o primeiro ponto. Evita o último ponto para não fazer a comparação desnecessária do último ponto com seu adjascente 
      for (let j = i + 1; j < routeWithFinalPoint.length; j += 1) { // Loop que inicia do indice posterior ao indice "i"
        if (j - i === 1) continue; // Evita coparação de pontos adjascentes
        const newRoute = [
          ...routeWithFinalPoint.slice(0, i), // Preserva do inicio da rota até o ponto "i"
          ...routeWithFinalPoint.slice(i, j).reverse(), // Inverte do ponto "i" até o ponto "j"
          ...routeWithFinalPoint.slice(j), // Preserva do ponto j até o final da rota
        ];
        const newRouteDistance = calculateTotalDistance(newRoute); // Soma a distância euclidiana entre todos os pontos da nova roda
        if (newRouteDistance < calculateTotalDistance(routeWithFinalPoint)) { // Compara com a soma da distância euclidiana entre todos os pontos da antiga rota. Se a nova distância for menor que antiga executa o código abaixo
          routeWithFinalPoint = newRoute; // Salva a nova rota
        decreased = true; // Muda o decreased para true indicando que houve uma diminuição, o que fará o loop while rodar novamente
        }
      }
    }
  }
  return routeWithFinalPoint;
}
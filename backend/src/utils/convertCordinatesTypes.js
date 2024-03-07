const oneClient = (client) => {
  client.x = Number(client.x);
  client.y = Number(client.y);
  return client;
};

const multipleClients = (clients) => {
  return clients.map(oneClient);
};

module.exports = { multipleClients, oneClient };
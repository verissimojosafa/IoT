const mqttConnection = ({ host, clientId }) => {
  // Create a client instance
  client = new Paho.MQTT.Client(host, Number(8080), clientId);

  return client;
};

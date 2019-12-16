const connection = new MqttConnection({
  host: "test.mosquitto.org",
  clientId: "kjJosafakj"
});

connection.client.connect({
  onSuccess: () => {
    console.log("connected");

    connectionEstablished();
  },
  useSSL: true
});

function sendToBroker({ payload, topic }) {
  const message = new Paho.MQTT.Message(payload);
  message.destinationName = topic;
  connection.client.send(message);
}

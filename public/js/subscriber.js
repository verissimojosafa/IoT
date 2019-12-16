const connection = new MqttConnection({
  host: "test.mosquitto.org",
  clientId: "jJosafaj"
});

connection.client.connect({
  onSuccess: () => {
    console.log("connected");

    connectionEstablished();
  },
  useSSL: true
});

function subscribeTopic(topic) {
  connection.client.subscribe(topic);
  console.log(`Topic: "${topic}" signed`);
}

const mqttConect = ({host, clientId}) => {
  // Create a client instance
  client = new Paho.MQTT.Client(
    host,
    Number(8080),
    clientId
  );

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;

  // connect the client
  client.connect({ onSuccess: onConnect });

  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("onConnect");
    client.subscribe("josafaAqBlzPovo");
    client.subscribe("josafaAqBlzPovo/site");
    // message = new Paho.MQTT.Message("Hello");
    // message.destinationName = "josafaAqBlzPovo";
    // client.send(message);
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:" + responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log(message.destinationName);
    if (message.destinationName == "josafaAqBlzPovo") {
      console.log("eh yt eh?");
      const iframe = document.createElement("iframe");
      const videoId = message.payloadString.split("?v=")[1];
      let src = `http://www.youtube.com/embed/${videoId}?autoplay=1`;
      iframe.src = src;
      iframe.width = "500";
      iframe.height = "500";
      document.body.appendChild(iframe);
    } else if (message.destinationName == "josafaAqBlzPovo/site") {
      const iframe = document.createElement("iframe");
      let src = message.payloadString;
      iframe.src = src;
      iframe.width = "500";
      iframe.height = "500";
      document.body.appendChild(iframe);
    }
  }
};

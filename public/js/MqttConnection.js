class MqttConnection {
  constructor({host, clientId, port = 8081}) {
      this._client = new Paho.MQTT.Client(host, Number(port), clientId);
      this.setOnConnectionLost();
  }

  setOnConnectionLost(onConnectionLost = null) {
      if(onConnectionLost == null) {
          this.client.onConnectionLost = responseObject => {
              if (responseObject.errorCode !== 0) {
              console.log("onConnectionLost:" + responseObject.errorMessage);
              }
          };
      } else {
          this.client.onConnectionLost = onConnectionLost;
      }
  }

  get client() {
      return this._client;
  }
}
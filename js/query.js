"use strict";
// Initialize the Amazon Cognito credentials provider
AWS.config.region = "eu-central-1"; // Select the AWS region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: "eu-central-1:00abeafd-83d3-4ccb-9ba5-c5fc5b31af03",
});

// Set init variables
let state = "NaN";
let network = "NaN";
let thermal = "NaN";
let thermal_not = "NaN";
let phase = "NaN";
let phase_not = "NaN";
let level = "NaN";
let level_not = "NaN";
let alert_flag = false;
let dynamodb = new AWS.DynamoDB();
let docClient = new AWS.DynamoDB.DocumentClient();
let date = "";
let minutes = "";

// Funtion to query the data from the DB
function QueryData() {
  let params = {
    TableName: db,
    KeyConditionExpression: "#id = :id",
    ExpressionAttributeNames: { "#id": "id_number" },
    ExpressionAttributeValues: { ":id": clientID },
  };

  docClient.query(params, function (err, data) {
    if (err) {
      console.log(JSON.stringify(err, undefined, 2));
      window.location.href = login;
    } else {
      network = data.Items[0].network;
      state = data.Items[0].thing_status;
    }
    document.getElementById("label").innerHTML = "No disponible";

    // Logger
    const logger = document.querySelector("#logger");
    const logger_label = document.querySelector("#logger_label");
    let now = Date.now();
    let last_date = new Date(date).getTime();
    let diff = now - last_date;
    minutes = Math.floor(diff / 1000 / 60);

    if (date !== data.Items[0].date_time) {
      date = data.Items[0].date_time;
      let stateV;
      if (parseInt(state)) {
        stateV = "Motor encendido.";
      } else {
        stateV = "Motor apagado.";
      }
      logger.textContent += `\n ${data.Items[0].date_time}: ${stateV} `;
      logger.scrollTop = logger.scrollHeight;
    }
    if (minutes) {
      logger_label.textContent = `Ultima actividad hace ${minutes} min.`;
    } else {
      logger_label.textContent = `Ultima actividad hace menos de un min.`;
    }
  });
}
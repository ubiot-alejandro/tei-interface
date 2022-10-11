"use strict";
// Initialize the Amazon Cognito credentials provider
AWS.config.region = "eu-central-1"; // Select the AWS region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: "eu-central-1:00abeafd-83d3-4ccb-9ba5-c5fc5b31af03",
});

// Set init variables
let state = "NaN";
let network = "NaN";
let source = "NaN";
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
let minutes = 0;
let hours = 0;
let mins = 0;

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
      source = data.Items[0].source_shelly;
    }
    if (source == "init") {
      document.getElementById("label").innerHTML = "Falla electrica";
    } else {
      document.getElementById("label").innerHTML = "No disponible";
    }

    // Logger
    const logger = document.querySelector("#logger");
    const logger_current = document.querySelector("#logger_current");
    let now = Date.now();
    let last_date = new Date(date).getTime();
    let diff = now - last_date;
    minutes = Math.floor(diff / 1000 / 60);
    if (minutes > 60) {
      hours = Math.floor(minutes / 60);
      mins = Math.floor(((minutes / 60) % 1) * 60);
    } else {
      hours = 0;
      mins = minutes;
    }

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
      if (hours === 0) {
        logger_current.textContent = `${mins} min.`;
      } else {
        logger_current.textContent = `${hours} hr y ${mins} min.`;
      }
    } else {
      logger_current.textContent = `Menos de un min.`;
    }
  });
}

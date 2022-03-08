// Set environment
var environment = "dev"  // dev = aquifer.network || prod = tei.com.ve

if (environment == "prod") {
    var db = "tei-db"
    var login = "https://auth.tei.com.ve/login?client_id=7g3i7fpuuotl1d7jjevu29pilq&response_type=token&scope=email+https://tei.logo.actions/logo.off+https://tei.logo.actions/logo.on+openid&redirect_uri=https://www.tei.com.ve/servicio"
    var on_api = "https://vdawi12xzl.execute-api.eu-central-1.amazonaws.com/default/on-function"
    var off_api = "https://8hf8zi8mvd.execute-api.eu-central-1.amazonaws.com/default/off-function"
    var oauth = "https://auth.tei.com.ve/oauth2/userInfo"
    console.log("Running TEI prod mode")

} else if (environment == "dev") {
    var db = "tei-db-dev"
    var login = "https://auth.aquifer.network/login?client_id=452pb2r4t2eeaabii6i8mcg0op&response_type=token&scope=email+https://aquifer.logo.actions/logo.off+https://aquifer.logo.actions/logo.on+openid&redirect_uri=https://www.aquifer.network/servicio"
    var on_api = "https://aoa22fzv4a.execute-api.eu-central-1.amazonaws.com/default/on-function-dev"
    var off_api = "https://pqdblyqt4g.execute-api.eu-central-1.amazonaws.com/default/off-function-dev"
    var  oauth = "https://auth.aquifer.network/oauth2/userInfo"
    console.log("Running TEI dev mode")
}

// Variables to play notifications sounds
var init = true
var notified1 = false
var notified2 = false
var notified3 = false
var notified4 = false

// Funtion to turn ON from the GUI
function invokeON() {
  let token = window.location.href  // Reading from url
  let auth = token.split('&')[1].split('=')[1]  // Select the auth section
  let url= on_api + "?id=" + clientID;  // and join  with the api to make the auth call
    
    fetch(url, {
      mode: 'cors',
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : auth
      }
    })
    .then(data=> data.json())
    .then(res=>{console.log(res)}); // Fetching with auth

}

// Funtion to turn OFF from the GUI
function invokeOFF() {
  let token = window.location.href  // Reading from url
  let auth = token.split('&')[1].split('=')[1]  // Select the auth section
  let url= off_api + "?id=" + clientID; // and join  with the api to make the auth call
    
    fetch(url, {
      mode: 'cors',
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : auth
      }
    })
    .then(data=> data.json())
    .then(res=>{console.log(res)}); // Fetching with auth
}

// Funtion to get the client ID
function getId() {
  let token = "https://www.tei.com.ve/servicio#id_token=eyJraWQiOiJiamI5R3lQbFVYeFlaanlpbW9PR1pSNGYxb0FudWp2YlNtNjF0U29EenZFPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoia2p1UUlmUnMycEU2bm1TaHVmNWYwdyIsInN1YiI6ImYzZmViNDg4LTZmNGMtNDJjNi1iMzY5LTFhNjYxMTQzYjkwYyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5jb21cL2V1LWNlbnRyYWwtMV9aQzF4U2tlZjciLCJjb2duaXRvOnVzZXJuYW1lIjoiZjNmZWI0ODgtNmY0Yy00MmM2LWIzNjktMWE2NjExNDNiOTBjIiwiYXVkIjoiN2czaTdmcHV1b3RsMWQ3ampldnUyOXBpbHEiLCJldmVudF9pZCI6ImMxODI4Zjk4LTMyYTUtNGZkNC1hMjdiLWQ2MmZmNDNiNmZhZCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjQ2NzYzMTI5LCJleHAiOjE2NDY3NjY3MjksImlhdCI6MTY0Njc2MzEyOSwianRpIjoiYWE5YjViNTUtOGVhNy00NGMyLThmNGQtY2I5MDdjZDczNjE1IiwiZW1haWwiOiJ1YmlvdC5yYWZhZWxAZ21haWwuY29tIn0.BlA46mESWsFyZvlbp80hdqGhiXI9ZGuJmVdBjQuoUJ5zftm8mPMzT3EbV-egzGslj_myN7Pkl3HA7tiEVftfy-oo-P7t9BA7MpwtNj45TjD5Dicd95AeINpbs55TX9VCXuwqOaf9Nn2VlNjM2c412IsJfZ8TBtEotBCrpkf9CdEowKRB9FTKmOoHE3aY1W9DBGvY3OsqgDjgy5EY01c-FiDw2yhk9j9rtf2ZmEZsGhgrBqZmW0shiZrKVZJS7oxYCR7TGk5cukCdFmXkMJh5uXfz1odL_qg6pHHBy4FePd7dGpzPblAr4QgsCnEdPhC2HGDy97r4iH0iNbpTeV7cMA&access_token=eyJraWQiOiJ0eDFkaW5OVGlLZmdSNEpPREsxOFhMRURIUENoM1wvcjBZd1ZjNlV5XC9iTlU9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJmM2ZlYjQ4OC02ZjRjLTQyYzYtYjM2OS0xYTY2MTE0M2I5MGMiLCJldmVudF9pZCI6ImMxODI4Zjk4LTMyYTUtNGZkNC1hMjdiLWQ2MmZmNDNiNmZhZCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoib3BlbmlkIGh0dHBzOlwvXC90ZWkubG9nby5hY3Rpb25zXC9sb2dvLm9mZiBodHRwczpcL1wvdGVpLmxvZ28uYWN0aW9uc1wvbG9nby5vbiBlbWFpbCIsImF1dGhfdGltZSI6MTY0Njc2MzEyOSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LWNlbnRyYWwtMS5hbWF6b25hd3MuY29tXC9ldS1jZW50cmFsLTFfWkMxeFNrZWY3IiwiZXhwIjoxNjQ2NzY2NzI5LCJpYXQiOjE2NDY3NjMxMjksInZlcnNpb24iOjIsImp0aSI6IjVmYTA5MTQyLTNmNjItNGVjNi05MTQxLTM4ZmQ2OThjZmIyMyIsImNsaWVudF9pZCI6IjdnM2k3ZnB1dW90bDFkN2pqZXZ1MjlwaWxxIiwidXNlcm5hbWUiOiJmM2ZlYjQ4OC02ZjRjLTQyYzYtYjM2OS0xYTY2MTE0M2I5MGMifQ.F_5tFx0tc6HSDdyBijyv5bTCPXiBVSuEaJLsPj09R7K2jyMtFH9WROWb1EOdvR89DveNob16CcRsnjgBAFA4W73Zn206Udewv-j2MMgl5OAYwB-vjCjG1qH1DvtZp2-Paq43NK91UudQxqMIyWkOaYBeFujkF5n9VT7gwJ46x6sgii_nC7HpysLXyUf3rw0L17miQ1whdZ3vdrFi2cM5yb-qTrA1mJt2DcwkQOzUkgobnJ580rj4ub_zUR3-8BgWm-xXZheLdrx8ZxpMksnRNw6OlQk9_T1sTsWRJ5zXmfK6rL8DCLtkA0UxbfRAoQvGXnHcedjH2X64s5btuIIJcw&expires_in=3600&token_type=Bearer" 
  // For tests
  
  //let token = window.location.href  // Reading from url
  let auth = "Bearer " + token.split('&')[1].split('=')[1]  // Select the auth section
  let url = oauth;  // Using the variable link
    
  fetch(url, {
    mode: 'cors',
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : auth
    }
  })
  .then(data=> data.json())
  .then(res=>{ clientID = res["sub"] }); // Fetching with auth
}

// Funtion to update the notifications on the GUI according with the DB; including sounds
function updateImage() {
  var music = new Audio('../audio/notif.mp3');
  var connection = new Audio('../audio/init.mp3');
  var imageon = document.getElementById("derecha");
  var imageoff = document.getElementById("izquierda");
  var image1 = document.getElementById("derecha1");
  var image2 = document.getElementById("derecha2");
  var thermal_not = document.getElementById("thermal");
  var phase_not = document.getElementById("phase");
  var level_not = document.getElementById("level");

  queryData();  // To update the data each time
  
  // Updating for ON cases
  if ( state == "01") {
      image1.src="../imagenes/iconos/gota-on2.png";
      imageon.src="../imagenes/iconos/encendido-on.png";
      imageoff.src="../imagenes/iconos/apagado-off.png";
      
      if (! notified1) {
        if (! init) {
          music.play();
          notified1 = true
          notified2 = false
        } else {
          init = false
          notified1 = true
          notified2 = false
        }
      }
  
  // Updating for OFF cases  
  } else if ( state == "00") {
      image1.src="../imagenes/iconos/gota-off2.png";
      imageon.src="../imagenes/iconos/encendido-off.png";
      imageoff.src="../imagenes/iconos/apagado-on.png";
            
      if (! notified2) {
        if (! init) {
          music.play();
          notified1 = false
          notified2 = true
        } else {
          init = false
          notified1 = false
          notified2 = true
        }
      }      
  }
  
  // Updating for OFFLINE cases
  if ( network == "Offline") {
      image2.src="../imagenes/iconos/conexion-off2.png";

      if (! notified3) {
        connection.play();
        notified3 = true
        notified4 = false
      }
  
  // Updating for ONLINE cases
  } else if ( network == "Online_") {
      image2.src="../imagenes/iconos/conexion-on2.png";

      if (! notified4) {
        connection.play();
        notified3 = false
        notified4 = true
      }
  }

  // Updating for THERMAL ON cases
  if ( thermal == "01") {
    thermal_not.src="../imagenes/iconos/termico-on2.png";
  
  // Updating for THERMAL OFF cases
  } else if ( thermal == "00") {
    thermal_not.src="../imagenes/iconos/termico-off2.png";
  }

  // Updating for PHASE ON cases
  if ( phase == "01") {
    phase_not.src="../imagenes/iconos/supervisor-on2.png";
  
  // Updating for PHASE OFF cases
  } else if ( phase == "00") {
    phase_not.src="../imagenes/iconos/supervisor-off2.png";
  }

  // Updating for LEVEL ON cases
  if ( level == "01") {
    level_not.src="../imagenes/iconos/nivel-on2.png";
  
  // Updating for LEVEL OFF cases
  } else if ( level == "00") {
    level_not.src="../imagenes/iconos/nivel-off2.png";
  }
}

// Funtion to handle errors on the GUI
function handleError(evt) {
  if (evt.message) {
    if (evt.message == `Uncaught TypeError: Cannot read properties of undefined (reading 'split')`) {
      window.location.href = login;

    } else if (evt.message == `Script error.`) {
      window.location.href = login;
    }
  }
}

// Funtion to redirect to the LOGIN page
function redirectTo() {
  window.location.href=login;
}

// Funtion to know how much the motor ran since the last ON (not in use)
function test() {

  now = parseInt(Date.now().toString().substr(0,10))
  dt = parseInt(dt)
 
  var date = new Date(null);
  date.setSeconds(now - dt);
  var result = date.toISOString().substr(11, 8);
  console.log(result)
}

setInterval(updateImage, 1000); // Calling the DB to update (1 - 5 seconds)

window.addEventListener("error", handleError, true); // Listen errors

getId() // Get ID when init

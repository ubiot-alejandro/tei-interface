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
  let token = "https://www.tei.com.ve/servicio#id_token=eyJraWQiOiJiamI5R3lQbFVYeFlaanlpbW9PR1pSNGYxb0FudWp2YlNtNjF0U29EenZFPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiT1VTV1ZWRFlaeTItOHFLNlF4ZXZLdyIsInN1YiI6ImYzZmViNDg4LTZmNGMtNDJjNi1iMzY5LTFhNjYxMTQzYjkwYyIsImF1ZCI6IjdnM2k3ZnB1dW90bDFkN2pqZXZ1MjlwaWxxIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjQ2NjcwMTM0LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5jb21cL2V1LWNlbnRyYWwtMV9aQzF4U2tlZjciLCJjb2duaXRvOnVzZXJuYW1lIjoiZjNmZWI0ODgtNmY0Yy00MmM2LWIzNjktMWE2NjExNDNiOTBjIiwiZXhwIjoxNjQ2NjczNzM0LCJpYXQiOjE2NDY2NzAxMzQsImp0aSI6ImU4YTc4MDczLTMyY2YtNDZkNi04MTk2LWYxMGZjNmU5MzRhNSIsImVtYWlsIjoidWJpb3QucmFmYWVsQGdtYWlsLmNvbSJ9.m_dYgpSEZi1hgciIMei_NnJs6_qjnSPpVlQGvxkMFf26Fj0cSAmGaxtgV2q9-Shixbsn_WxxN038Vv9Iv0nyBzIIT7YwP8kK9f6NLz2GFLHf5xhD308Sp21tbfb2qooB3SfB8PgDHhVt8JYND37UjDHs9VGLg25edO6brSFEWMO7mDFqK_p2ge4tUkvYAb2iONjI2BaYHXIl1SNfhaQEpTvbWsMtUjyD4G1cPPElDXuEoketOmxwJmH-ZAWHyLWGaWRlsuYMZpk9EBExtrEYevap_2FVxHVhMtsp2PxVJwOLFFM6UPkyji4mc4Mqs2ZhRqieeVCGxYJWAL2auP6sOA&access_token=eyJraWQiOiJ0eDFkaW5OVGlLZmdSNEpPREsxOFhMRURIUENoM1wvcjBZd1ZjNlV5XC9iTlU9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJmM2ZlYjQ4OC02ZjRjLTQyYzYtYjM2OS0xYTY2MTE0M2I5MGMiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6Im9wZW5pZCBodHRwczpcL1wvdGVpLmxvZ28uYWN0aW9uc1wvbG9nby5vZmYgaHR0cHM6XC9cL3RlaS5sb2dvLmFjdGlvbnNcL2xvZ28ub24gZW1haWwiLCJhdXRoX3RpbWUiOjE2NDY2NzAxMzQsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS1jZW50cmFsLTEuYW1hem9uYXdzLmNvbVwvZXUtY2VudHJhbC0xX1pDMXhTa2VmNyIsImV4cCI6MTY0NjY3MzczNCwiaWF0IjoxNjQ2NjcwMTM0LCJ2ZXJzaW9uIjoyLCJqdGkiOiJjOTYwYzQxNC1hNmY2LTRmOTktYmY4Ny02MjdkZWM2MTc4MjgiLCJjbGllbnRfaWQiOiI3ZzNpN2ZwdXVvdGwxZDdqamV2dTI5cGlscSIsInVzZXJuYW1lIjoiZjNmZWI0ODgtNmY0Yy00MmM2LWIzNjktMWE2NjExNDNiOTBjIn0.AwRqppAc7SZ7D2lCRF4x2_JmpvfnA8Uif8qN0kcd2muvhaXjSLQxXNF9SMYbG9QY14FTGQoXFtqfHYHEm9zBOIZzuv8YWhEz4CpOq-RVKxqSCccM8HApEGmh7gRszJ1B3Q5F6JM41TxXvU0ltUtByGPHR5AXM1VPR3ZfA2LdBbY-UxOAR5Q-WY1fZ-32eHd7cRsxLguv7wwBweyIOFQVgpGodXS0p8SxaPI6KYNkoYFa8blG97Tjtkz5k-QhBGoUyx_CGmriuMFrpeCYNz3eEGh0BOHL9db9thOL8KbrL62Ec64Ax_K-wIupsPU87L6zl28Zzgs82ZchmfajDSWcOA&expires_in=3600&token_type=Bearer" // For tests
  
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

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
  let token = "https://www.aquifer.network/servicio#id_token=eyJraWQiOiJMOG1lcHJOWk1HV0VOWGEwTURYaW51bjQzSksrXC9QTkVTVHBkUG8xR3NxQT0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiSi1WUGhIcmZ6Njk0WXdNZW81eFRUZyIsInN1YiI6IjU0ZmRiOTY4LWRhODEtNGU2OC04MWU1LThhYWM3NWRhOTI2ZiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5jb21cL2V1LWNlbnRyYWwtMV84ZWliTHV0MFEiLCJjb2duaXRvOnVzZXJuYW1lIjoiNTRmZGI5NjgtZGE4MS00ZTY4LTgxZTUtOGFhYzc1ZGE5MjZmIiwiYXVkIjoiNDUycGIycjR0MmVlYWFiaWk2aThtY2cwb3AiLCJldmVudF9pZCI6IjBiNTlhODlkLTRhZDAtNDIwZC05YWM4LWIxNzBmNTQ3MzMzZiIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjQ1Nzk1MzE2LCJleHAiOjE2NDU3OTg5MTYsImlhdCI6MTY0NTc5NTMxNiwianRpIjoiYjM1MWQyMjAtY2NhMC00NGE5LTkxZjEtYTc0MGU1NmM3MTU1IiwiZW1haWwiOiJ1YmlvdC5hbGVqYW5kcm9AZ21haWwuY29tIn0.UvJ-cCz77cdWYdxsXDQ0CqxYBkuKDe2xTonOIJhl9mzpXtMQtBCkPad-nV6Hg4edgMG0xR6M4h9i2IqQLrQlWtra1xIzRanIDTFJnuhWPQidUI6KFCfH8vvj2FOh3bI3OViVbkmfx7RB-EY2llAWqvqtZHl3wIBSSIgja-lHrd99kz9Os7Rd55PY9wE0bOS7cqZku9mFxpwzPMVjWScvoGAzJl3JmC_VuXQsX3XU9dKte8Htxc4l3UEIn1yTSY3Tv8xhVfUiTifjQPDmAM1xef60XVOzZQ3GncVYuz81skt6tyak_feAW6RUyoCc58rlZN0f7tjfA0Ciqd33ZiuDuw&access_token=eyJraWQiOiIyTmg5bjNScjJ0cXVERmpTY2xNaWo5MnZqWVBYMkloN0pWUWFKd2JHNlZJPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI1NGZkYjk2OC1kYTgxLTRlNjgtODFlNS04YWFjNzVkYTkyNmYiLCJldmVudF9pZCI6IjBiNTlhODlkLTRhZDAtNDIwZC05YWM4LWIxNzBmNTQ3MzMzZiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiaHR0cHM6XC9cL2FxdWlmZXIubG9nby5hY3Rpb25zXC9sb2dvLm9mZiBodHRwczpcL1wvYXF1aWZlci5sb2dvLmFjdGlvbnNcL2xvZ28ub24gb3BlbmlkIGVtYWlsIiwiYXV0aF90aW1lIjoxNjQ1Nzk1MzE2LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5jb21cL2V1LWNlbnRyYWwtMV84ZWliTHV0MFEiLCJleHAiOjE2NDU3OTg5MTYsImlhdCI6MTY0NTc5NTMxNiwidmVyc2lvbiI6MiwianRpIjoiNDQ1YWFiNDUtZTcwNS00NmUwLWJhN2YtZThjZThkMWZjZDE2IiwiY2xpZW50X2lkIjoiNDUycGIycjR0MmVlYWFiaWk2aThtY2cwb3AiLCJ1c2VybmFtZSI6IjU0ZmRiOTY4LWRhODEtNGU2OC04MWU1LThhYWM3NWRhOTI2ZiJ9.NfIcwYfELwEjng-xQlAVisIO423taqTk6MY4VrMDmc1i9ebxNknG_9Mwhzz29xpACzxuUqB5pY_niVn-PlGFnZ_hfA8a_-RABSjC0WOWEZkgeQqyY1tTNlN-X3F4iYPIRgDbittPm7I-0I_Q6PT0IspOBDOWEFikuqkBs9ZIcr7uqMQpcNcVjRiEs-lqYGgJDiccHGKXqJhltpEgpgX7oMgzc7bQ3fK1g_zI-nD0chda_SxhJLGBfQbCM3xkOQUU0ooNff--lAsiO9J4T31kmyWWClUBOdUTp8eDikSGqnmFlosHmiFl8DsmUmtLtRGIS6uBHTYxC1W57m8vylB21A&expires_in=3600&token_type=Bearer" // For tests
  
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
      image1.src="../imagenes/iconos/gota-on.png";
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
      image1.src="../imagenes/iconos/gota-off.png";
      imageon.src="../imagenes/iconos/apagado-on.png";
      imageoff.src="../imagenes/iconos/encendido-off.png";
            
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
      image2.src="../imagenes/iconos/conexion-off.png";

      if (! notified3) {
        connection.play();
        notified3 = true
        notified4 = false
      }
  
  // Updating for ONLINE cases
  } else if ( network == "Online_") {
      image2.src="../imagenes/iconos/conexion-on.png";

      if (! notified4) {
        connection.play();
        notified3 = false
        notified4 = true
      }
  }

  // Updating for THERMAL ON cases
  if ( thermal == "01") {
    thermal_not.src="../imagenes/iconos/termico-on.png";
  
  // Updating for THERMAL OFF cases
  } else if ( thermal == "00") {
    thermal_not.src="../imagenes/iconos/termico-off.png";
  }

  // Updating for PHASE ON cases
  if ( phase == "01") {
    phase_not.src="../imagenes/iconos/supervisor-on.png";
  
  // Updating for PHASE OFF cases
  } else if ( phase == "00") {
    phase_not.src="../imagenes/iconos/supervisor-off.png";
  }

  // Updating for LEVEL ON cases
  if ( level == "01") {
    level_not.src="../imagenes/iconos/nivel-on.png";
  
  // Updating for LEVEL OFF cases
  } else if ( level == "00") {
    level_not.src="../imagenes/iconos/nivel-off.png";
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

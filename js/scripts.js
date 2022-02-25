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
  let token = "https://www.aquifer.network/servicio#id_token=eyJraWQiOiJMOG1lcHJOWk1HV0VOWGEwTURYaW51bjQzSksrXC9QTkVTVHBkUG8xR3NxQT0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiY2RaNlI5LWtoVm5jT0dkbVhvQmhvdyIsInN1YiI6IjU0ZmRiOTY4LWRhODEtNGU2OC04MWU1LThhYWM3NWRhOTI2ZiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5jb21cL2V1LWNlbnRyYWwtMV84ZWliTHV0MFEiLCJjb2duaXRvOnVzZXJuYW1lIjoiNTRmZGI5NjgtZGE4MS00ZTY4LTgxZTUtOGFhYzc1ZGE5MjZmIiwiYXVkIjoiNDUycGIycjR0MmVlYWFiaWk2aThtY2cwb3AiLCJldmVudF9pZCI6ImZiZGY3N2Y1LWQ5MjQtNDdkNS05MDcwLTMwMWQ5MWEzZGE4NCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjQ1NzI3NDM5LCJleHAiOjE2NDU3MzEwMzksImlhdCI6MTY0NTcyNzQzOSwianRpIjoiNDE1Y2RjOGItYjVlMS00ZWVhLWJlODgtMGYzOWUyMTU0ZmY3IiwiZW1haWwiOiJ1YmlvdC5hbGVqYW5kcm9AZ21haWwuY29tIn0.I2ERRAd_E3Py3HfJ-L8nqxiaWQebGU9LMwd7JksoRWbtwDNlNT3sXb2VNiL4yIA582pJApa9yU6jyVBDSVOs_HvpqrVMZgoFZfxiQaonbjMrWA3gG_YmN0wFvBuSnoNDy6U8YeL5nyF2p_GhyeBpYvN-LzHEqbPysWv-_v3_S9_MBJA25zey5bVu80Ggv9vzAQMLHMBmFUnT0oc77wC3zY0FpQTdRlEgyslFdRU14EFlBqvmCjjMG8pRutFdwOJW013dG_Y88faz_smBNOQh1TnzDnqOm-fLLTCt9UoL-ow1OnJnLFyLb2CxYAHJSdRYtDc31lga7LHN5eVxavitKQ&access_token=eyJraWQiOiIyTmg5bjNScjJ0cXVERmpTY2xNaWo5MnZqWVBYMkloN0pWUWFKd2JHNlZJPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI1NGZkYjk2OC1kYTgxLTRlNjgtODFlNS04YWFjNzVkYTkyNmYiLCJldmVudF9pZCI6ImZiZGY3N2Y1LWQ5MjQtNDdkNS05MDcwLTMwMWQ5MWEzZGE4NCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiaHR0cHM6XC9cL2FxdWlmZXIubG9nby5hY3Rpb25zXC9sb2dvLm9mZiBodHRwczpcL1wvYXF1aWZlci5sb2dvLmFjdGlvbnNcL2xvZ28ub24gb3BlbmlkIGVtYWlsIiwiYXV0aF90aW1lIjoxNjQ1NzI3NDM5LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5jb21cL2V1LWNlbnRyYWwtMV84ZWliTHV0MFEiLCJleHAiOjE2NDU3MzEwMzksImlhdCI6MTY0NTcyNzQzOSwidmVyc2lvbiI6MiwianRpIjoiMzM0ZjFmYzYtYmNmOS00MDFlLTgyYjMtNzFjNzU0MDgxZTMwIiwiY2xpZW50X2lkIjoiNDUycGIycjR0MmVlYWFiaWk2aThtY2cwb3AiLCJ1c2VybmFtZSI6IjU0ZmRiOTY4LWRhODEtNGU2OC04MWU1LThhYWM3NWRhOTI2ZiJ9.fAEXWen7ZrS9atcH8VQZgclYhUAoIcGXH8PcF7a6Np6J_6i_i7m60-g1X7FbckSfM7jyZFDjvfVDbazafBgeENMHd6RjE2Doj5H7goUqwOCAgzSe855ZDdwYsV72GJQSc6EnooZdD7n9h7VtgJHUS_H_wv0lVTtigU7b6TgRAaKEkcgHCFzBQJRSWARDYaeQdXX07de2P8PpSIxuP-CCFDl7q0e849D7Wc-W-01_6LAq4TV0y3wQ4FkTU2QirvG8u0GOcSBUGrF5y5fvjqd2mpznMZvxay562Dk10lqfC_HHyNFc30e7HkFvleBkB0dDHKVssnh8tucONISLpuAaOg&expires_in=3600&token_type=Bearer" // For tests
  
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

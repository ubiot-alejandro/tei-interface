var db = "tei-db"
var login = "https://auth.tei.com.ve/login?client_id=7g3i7fpuuotl1d7jjevu29pilq&response_type=token&scope=email+https://tei.logo.actions/logo.off+https://tei.logo.actions/logo.on+openid&redirect_uri=https://www.tei.com.ve/servicio"
var on_api = "https://vdawi12xzl.execute-api.eu-central-1.amazonaws.com/default/on-function"
var off_api = "https://8hf8zi8mvd.execute-api.eu-central-1.amazonaws.com/default/off-function"
var oauth = "https://auth.tei.com.ve/oauth2/userInfo"

// Variables to play notifications sounds
var init = true
var notified1 = false
var notified2 = false
var notified3 = false
var notified4 = false

const token = window.location.href

// API + Lambda Python + HTTP
function callOn0() {
  //let token = window.location.href  // Reading from url 
  let auth = token.split('&')[1].split('=')[1]  // Select the auth section

  fetch(" https://vnfl2aee1k.execute-api.eu-central-1.amazonaws.com/default/control/http/on", {
      mode: 'cors',
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : auth
      }
    })
    .then(data=> data.json())
    .then(res=>{console.log(res['body'])}); // Fetching with auth
}

function callOff0() {
  //let token = window.location.href  // Reading from url 
  let auth = token.split('&')[1].split('=')[1]  // Select the auth section

  fetch(" https://vnfl2aee1k.execute-api.eu-central-1.amazonaws.com/default/control/http/off", {
      mode: 'cors',
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : auth
      }
    })
    .then(data=> data.json())
    .then(res=>{console.log(res['body'])}); // Fetching with auth
}

// Funtion to get the client ID
function getId() {
  // let token = window.location.href  // Reading from url
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
  .then(res=>{ clientID = res["sub"];
  if (clientID == "XXXXX" ) { window.location.href = "clientX.html" } }); // Fetching with auth
}

// Funtion to update the notifications on the GUI according with the DB; including sounds
function updateImage() {
  var music = new Audio('../audio/notif.mp3');
  var connection = new Audio('../audio/init.mp3');
  var imageon = document.getElementById("derecha");
  var imageoff = document.getElementById("izquierda");
  var image1 = document.getElementById("derecha1");
  var image2 = document.getElementById("derecha2");

 QueryData();  // To update the data each time
  
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
          swal("Estimado usuario TEI", "Su motor ha sido encendido correctamente.", {
            buttons: false,
            icon: "success",
            timer: 3000,
            closeOnClickOutside: false,
          });

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
          swal("Estimado usuario TEI", "Su motor ha sido apagado correctamente.", {
            buttons: false,
            icon: "success",
            timer: 3000,
            closeOnClickOutside: false,
          });

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

setInterval(updateImage, 5000); // Calling the DB to update (1 - 5 seconds)

window.addEventListener("error", handleError, true); // Listen errors

getId() // Get ID when init
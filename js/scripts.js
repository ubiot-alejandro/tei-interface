// Set environment
var environment = "prod" // dev = aquifer.network || prod = tei.com.ve

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

var init = true
var notified1 = false
var notified2 = false
var notified3 = false
var notified4 = false

function invokeON() {

  let token = window.location.href

  let auth = token.split('&')[1].split('=')[1]

  let url= on_api + "?id=" + clientID;
    
    fetch(url, {
      mode: 'cors',
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : auth
      }
    })
    .then(data=> data.json())
    .then(res=>{console.log(res)});

}

function invokeOFF() {
  
  let token = window.location.href

  let auth = token.split('&')[1].split('=')[1]
  
  let url= off_api + "?id=" + clientID;
    
    fetch(url, {
      mode: 'cors',
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : auth
      }
    })
    .then(data=> data.json())
    .then(res=>{console.log(res)});
}

function getId() {

  let token = window.location.href

  let auth = "Bearer " + token.split('&')[1].split('=')[1]

  let url = oauth;
    
  fetch(url, {
    mode: 'cors',
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : auth
    }
  })
  .then(data=> data.json())
  .then(res=>{ clientID = res["sub"] });
}

function updateImage() {
  var music = new Audio('../audio/notif.mp3');
  var connection = new Audio('../audio/init.mp3');
  var imageon = document.getElementById("derecha");
  var imageoff = document.getElementById("izquierda");
  var image1 = document.getElementById("derecha1");
  var image2 = document.getElementById("derecha2");
  var thermal_not = document.getElementById("thermal");

  //scanData();
  queryData();
  
  if ( state == "01") {
      image1.src="../imagenes/iconos/valvulaAbierta.png";
      imageon.src="../imagenes/iconos/onNewencendido.png";
      imageoff.src="../imagenes/iconos/offNewapagado.png";
      
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

  } else if ( state == "00") {
      image1.src="../imagenes/iconos/valvulaCerrada.png";
      imageon.src="../imagenes/iconos/onNewapagado.png";
      imageoff.src="../imagenes/iconos/offNewencendido.png";
            
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

  if ( network == "Offline") {
      image2.src="../imagenes/iconos/Boton_desconectado.png";

      if (! notified3) {
        connection.play();
        notified3 = true
        notified4 = false
      }

  } else if ( network == "Online_") {
      image2.src="../imagenes/iconos/Boton_conectado.png";

      if (! notified4) {
        connection.play();
        notified3 = false
        notified4 = true
      }
    
  }

  if ( thermal == "01") {
    thermal_not.src="../imagenes/iconos/on-thermal.png";

  } else if ( thermal == "00") {
    thermal_not.src="../imagenes/iconos/off-thermal.png";
  }

}

function handleError(evt) {
  if (evt.message) {

    // console.log(String(evt.message)[0,17])

    if (evt.message == `Uncaught TypeError: Cannot read properties of undefined (reading 'split')`) {

      //alert("Por favor inicie sesion antes...")
      window.location.href = login;

    } else if (evt.message == `Script error.`) {

      //alert("Por favor inicie sesion antes...")
      window.location.href = login;

    }
  }
}

function redirectTo() {

  window.location.href=login;
}

function test() {

  now = parseInt(Date.now().toString().substr(0,10))
  dt = parseInt(dt)
 
  var date = new Date(null);
  date.setSeconds(now - dt);
  var result = date.toISOString().substr(11, 8);

  console.log(result)

}

setInterval(updateImage, 1000);

window.addEventListener("error", handleError, true);

getId()

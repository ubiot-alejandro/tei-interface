var init = true
var notified1 = false
var notified2 = false
var notified3 = false
var notified4 = false

function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
}

function invokeON() {

  let token = window.location.href

  let auth = token.split('&')[1].split('=')[1]

  let url="https://vdawi12xzl.execute-api.eu-central-1.amazonaws.com/default/on-function" + "?id=" + clientID;
    
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
  
  let url="https://8hf8zi8mvd.execute-api.eu-central-1.amazonaws.com/default/off-function" + "?id=" + clientID;
    
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

  let url="https://auth.tei.com.ve/oauth2/userInfo";
    
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

  scanData();
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
}

function handleError(evt) {
  if (evt.message) {

    // console.log(String(evt.message)[0,17])

    if (evt.message == `Uncaught TypeError: Cannot read properties of undefined (reading 'split')`) {

      //alert("Por favor inicie sesion antes...")
      window.location.href = "https://auth.tei.com.ve/login?client_id=7g3i7fpuuotl1d7jjevu29pilq&response_type=token&scope=email+https://tei.logo.actions/logo.off+https://tei.logo.actions/logo.on+openid&redirect_uri=https://tei.com.ve";

    } else if (evt.message == `Script error.`) {

      //alert("Por favor inicie sesion antes...")
      window.location.href = "https://auth.tei.com.ve/login?client_id=7g3i7fpuuotl1d7jjevu29pilq&response_type=token&scope=email+https://tei.logo.actions/logo.off+https://tei.logo.actions/logo.on+openid&redirect_uri=https://tei.com.ve";

    }
  }
}

function test() {

  now = parseInt(Date.now().toString().substr(0,10))
  dt = parseInt(dt)
 
  var date = new Date(null);
  date.setSeconds(now - dt);
  var result = date.toISOString().substr(11, 8);

  console.log(result)

}

setInterval(updateImage, 5000);

window.addEventListener("error", handleError, true);

getId()

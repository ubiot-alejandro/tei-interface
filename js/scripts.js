// Set environment
var environment = "prod"  // dev = aquifer.network || prod = tei.com.ve

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
var notifiedL = false
var notifiedP = false
var notifiedT = false

const token = window.location.href

// Funtion to turn ON from the GUI
function invokeON() {
  // let token = window.location.href  // Reading from url 
  let auth = token.split('&')[1].split('=')[1]  // Select the auth section
  let url= on_api + "?id=" + clientID;  // and join  with the api to make the auth call

  if (network == "Offline") {
    swal("Estimado usuario TEI", "Su equipo se ecuentra sin conexión.", {
      buttons: false,
      icon: "error",
      timer: 2000,
      closeOnClickOutside: false,
    });

  } else if (thermal === "01" || phase === "01" || level === "01") {
    swal("Estimado usuario TEI", "Su motor no puede ser encendido. Una alarma está activa.", {
      buttons: false,
      icon: "error",
      timer: 3000,
      closeOnClickOutside: false,
    });
  
  } else if (state == "01") {
    swal("Estimado usuario TEI", "Su motor ya se ecuentra encendido.", {
      buttons: false,
      icon: "warning",
      timer: 2000,
      closeOnClickOutside: false,
    });

  } else {
    swal("Estimado usuario TEI", "Su motor está siendo encendido...", {
      buttons: false,
      icon: "info",
      timer: 10000,
      closeOnClickOutside: false,
    });

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
}

// Funtion to turn OFF from the GUI
function invokeOFF() {
  // let token = window.location.href  // Reading from url
  let auth = token.split('&')[1].split('=')[1]  // Select the auth section
  let url= off_api + "?id=" + clientID; // and join  with the api to make the auth call
    
  if (network == "Offline") {
    swal("Estimado usuario TEI", "Su equipo se ecuentra sin conexión.", {
      buttons: false,
      icon: "error",
      timer: 2000,
      closeOnClickOutside: false,
    });

  } else if (thermal === "01" || phase === "01" || level === "01") {
    swal("Estimado usuario TEI", "Una de sus alarmas está activa.", {
      buttons: false,
      icon: "error",
      timer: 3000,
      closeOnClickOutside: false,
    });
    
  } else if (state == "00") {
    swal("Estimado cliente TEI", "Su motor ya se ecuentra apagado.", {
      buttons: false,
      icon: "warning",
      timer: 2000,
      closeOnClickOutside: false,
    });

   } else {
    swal("Estimado usuario TEI", "Su motor está siendo apagado...", {
      buttons: false,
      icon: "info",
      timer: 10000,
      closeOnClickOutside: false,
    });

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
  var thermal_icon = document.getElementById("thermal");
  var phase_icon = document.getElementById("phase");
  var level_icon = document.getElementById("level");
  

  queryData();  // To update the data each time
  
  // Updating for ON cases
  if ( state == "01") {
      image1.src="../imagenes/iconos/gota-on2.png";
      imageon.src="../imagenes/iconos/encendido-on.png";
      imageoff.src="../imagenes/iconos/apagado-off.png";
      notifiedL = false
      notifiedP = false
      notifiedT = false
      
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

  // Updating for THERMAL ON cases
  if (thermal_not == "01" && thermal == "00" ) {
    document.getElementById('label').innerHTML = 'Apagado por el relé térmico';
  }

  if ( thermal == "01") {
    thermal_icon.src="../imagenes/iconos/termico-on2.png";
    document.getElementById('label').innerHTML = 'Relé térmico activado';

    if (! notifiedT) {
      swal("Estimado usuario TEI", "Su relé térmico se ha activado.", {
        buttons: false,
        icon: "warning",
        timer: 3000,
        closeOnClickOutside: false,
      });      
      notifiedT = true
      notifiedL = false
      notifiedP = false
    }
  
  // Updating for THERMAL OFF cases
  } else if ( thermal == "00") {
    thermal_icon.src="../imagenes/iconos/termico-off3.png";
  }

  // Updating for PHASE ON cases
  if (phase_not == "01" && phase == "00") {
    document.getElementById('label').innerHTML = 'Apagado por el supervisor de fase';
  }

  if ( phase == "01") {
    phase_icon.src="../imagenes/iconos/supervisor-on2.png";
    document.getElementById('label').innerHTML = 'Una o más fases caídas';

    if (! notifiedP) {
      swal("Estimado usuario TEI", "Su supervisor de fase se ha activado.", {
        buttons: false,
        icon: "warning",
        timer: 3000,
        closeOnClickOutside: false,
      });      
      notifiedP = true
      notifiedL = false
      notifiedT = false
    }
  
  // Updating for PHASE OFF cases
  } else if ( phase == "00") {
    phase_icon.src="../imagenes/iconos/supervisor-off3.png";
  }

  // Updating for LEVEL ON cases
  if (level_not == "01" && level == "00" ) {
    document.getElementById('label').innerHTML = 'Apagado por el relé de nivel';
  }

  if ( level == "01") {
    level_icon.src="../imagenes/iconos/nivel-on2.png";
    document.getElementById('label').innerHTML = 'Bajo nivel de agua en pozo';

    if (! notifiedL) {
      swal("Estimado usuario TEI", "Su relé de nivel se ha activado.", {
        buttons: false,
        icon: "warning",
        timer: 3000,
        closeOnClickOutside: false,
      });   
      notifiedL = true
      notifiedP = false
      notifiedT = false
    }
  
  // Updating for LEVEL OFF cases
  } else if ( level == "00") {
    level_icon.src="../imagenes/iconos/nivel-off3.png";
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

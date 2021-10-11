function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
}

function invokeON() {

  changeImage();

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

  changeImageoff();
  
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
    
  // let token = window.location.href

  let token = "https://d30a2flcb4p1wx.cloudfront.net/#id_token=eyJraWQiOiJiamI5R3lQbFVYeFlaanlpbW9PR1pSNGYxb0FudWp2YlNtNjF0U29EenZFPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoia0JxOEVubDZMOVl3MEsybExZTVZLZyIsInN1YiI6ImYzZmViNDg4LTZmNGMtNDJjNi1iMzY5LTFhNjYxMTQzYjkwYyIsImF1ZCI6IjdnM2k3ZnB1dW90bDFkN2pqZXZ1MjlwaWxxIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjMzOTgxOTE1LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5jb21cL2V1LWNlbnRyYWwtMV9aQzF4U2tlZjciLCJjb2duaXRvOnVzZXJuYW1lIjoiZjNmZWI0ODgtNmY0Yy00MmM2LWIzNjktMWE2NjExNDNiOTBjIiwiZXhwIjoxNjMzOTg1NTE1LCJpYXQiOjE2MzM5ODE5MTUsImp0aSI6IjRhZmI0MTlhLTYyMmQtNGRkNC1hODhiLTk4ODFjMzNjYTdmMCIsImVtYWlsIjoidWJpb3QucmFmYWVsQGdtYWlsLmNvbSJ9.rFe5-PZaF8T4BplQ4DxR9J8918KnHwR1PNX_zzLE4cmC4n_68j5JCewtbgvwwEds9xAtz8VETCJ3sruNcSuS-T32C5SKtcX8ZbXva4Oerpb2niJK-xCvpgS9iRCVEx1ErcMcpyU88PZBB84upTxEbRkBEeivM954sKuQPpr6qBGCC6Psa4mef9ojOAG4_7PUTNwTV5ByY57jXybIRIQeK4sBHUK8ixmdtKmzPmsh2ZJrO8Y2FnchZRSrbPMGpbHBcttgMkf1tLVM_novFjt6eImortNYfm258EzmQeRWmR79Iv59yvlseT4Kqmr_FdVqkcyXkZfIQSmMzb-RvWpfyg&access_token=eyJraWQiOiJ0eDFkaW5OVGlLZmdSNEpPREsxOFhMRURIUENoM1wvcjBZd1ZjNlV5XC9iTlU9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJmM2ZlYjQ4OC02ZjRjLTQyYzYtYjM2OS0xYTY2MTE0M2I5MGMiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6Im9wZW5pZCBodHRwczpcL1wvdGVpLmxvZ28uYWN0aW9uc1wvbG9nby5vZmYgaHR0cHM6XC9cL3RlaS5sb2dvLmFjdGlvbnNcL2xvZ28ub24gZW1haWwiLCJhdXRoX3RpbWUiOjE2MzM5ODE5MTUsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS1jZW50cmFsLTEuYW1hem9uYXdzLmNvbVwvZXUtY2VudHJhbC0xX1pDMXhTa2VmNyIsImV4cCI6MTYzMzk4NTUxNSwiaWF0IjoxNjMzOTgxOTE1LCJ2ZXJzaW9uIjoyLCJqdGkiOiI5YTgxMGE3MS02M2YxLTRlNjUtYjk5OS00MzIxMjQ4N2IwZjkiLCJjbGllbnRfaWQiOiI3ZzNpN2ZwdXVvdGwxZDdqamV2dTI5cGlscSIsInVzZXJuYW1lIjoiZjNmZWI0ODgtNmY0Yy00MmM2LWIzNjktMWE2NjExNDNiOTBjIn0.HptCAjdzxY0DVUsh2DrUtukWkhZeS5x9KEhk1hix3lJAqQIMYS3F_2qszxyT0Vm4O4h3-NV5uXrgDyEjT44IX0KeZYJ3snLzF9zSwTMnWrCpDA9MzWKqriyyuVaUAXDAqEzZLVl3f8Cm3q4ncSgg3rtYYOg2AWgleo8Dsz1nos9YGplRfVz7UauHvv1KB8GpnSjtEPkolnyx2Q6BnU4mC0Zwo_OcAbkdTWBbi3rJROY7MOo69hNbYd74MqtQj2ka0Dlu3E_Kk4-oW44hEwXZASOYEJmvGju0GCTDe1O8JL5UrMedxqzyzEjp2nBsi4hdk821bz-SoVh8Qz6TJePEZg&expires_in=3600&token_type=Bearer"

  let auth = "Bearer " + token.split('&')[1].split('=')[1]

  let url="https://tei.auth.eu-central-1.amazoncognito.com/oauth2/userInfo";
    
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
  var image = document.getElementById("derecha1");
  var imageon = document.getElementById("derecha");
  var imageoff = document.getElementById("izquierda");
  var image1 = document.getElementById("derecha1");
  var image2 = document.getElementById("derecha2");

  scanData();
  queryData(); 

    if ( state == "01") {
        image1.src="../imagenes/iconos/valvulaAbierta.png";
    } else if ( state == "00") {
        image1.src="../imagenes/iconos/valvulaCerrada.png";
    }

    if ( state == "01") {
      imageon.src="../imagenes/iconos/onNewencendido.png";
  } else if ( state == "00") {
      imageon.src="../imagenes/iconos/onNewapagado.png";
  }

  if ( state == "01") {
    imageoff.src="../imagenes/iconos/offNewapagado.png";
} else if ( state == "00") {
    imageoff.src="../imagenes/iconos/offNewencendido.png";
}
    if ( network == "Offline") {
      image2.src="../imagenes/iconos/Boton_desconectado.png";
  } else if ( network == "Online_") {
      image2.src="../imagenes/iconos/Boton_conectado.png";
  }
}

function handleError(evt) {
  if (evt.message) {

    console.log(evt.message)

    if (evt.message == `Uncaught TypeError: Cannot read properties of undefined (reading 'split')`) {

      //alert("Por favor inicie sesion antes...")
      window.location.href = "https://tei.auth.eu-central-1.amazoncognito.com/login?client_id=7g3i7fpuuotl1d7jjevu29pilq&response_type=token&scope=email+https://tei.logo.actions/logo.off+https://tei.logo.actions/logo.on+openid&redirect_uri=https://d30a2flcb4p1wx.cloudfront.net";

    } else if (evt.message == `Script error.`) {

      //alert("Por favor inicie sesion antes...")
      window.location.href = "https://tei.auth.eu-central-1.amazoncognito.com/login?client_id=7g3i7fpuuotl1d7jjevu29pilq&response_type=token&scope=email+https://tei.logo.actions/logo.off+https://tei.logo.actions/logo.on+openid&redirect_uri=https://d30a2flcb4p1wx.cloudfront.net";

    }
  }
}


setInterval(updateImage, 1000);

window.addEventListener("error", handleError, true);

getId()

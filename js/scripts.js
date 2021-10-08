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

  let token = "https://d30a2flcb4p1wx.cloudfront.net/#id_token=eyJraWQiOiJiamI5R3lQbFVYeFlaanlpbW9PR1pSNGYxb0FudWp2YlNtNjF0U29EenZFPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiWmxnQWJQQThPT0ltTzROeDZuamlSUSIsInN1YiI6ImYzZmViNDg4LTZmNGMtNDJjNi1iMzY5LTFhNjYxMTQzYjkwYyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5jb21cL2V1LWNlbnRyYWwtMV9aQzF4U2tlZjciLCJjb2duaXRvOnVzZXJuYW1lIjoiZjNmZWI0ODgtNmY0Yy00MmM2LWIzNjktMWE2NjExNDNiOTBjIiwiYXVkIjoiN2czaTdmcHV1b3RsMWQ3ampldnUyOXBpbHEiLCJldmVudF9pZCI6IjJlZjZhM2Y4LTFhZDktNGRkMy1hYjE3LWEzMmI4YWU0NmZmNSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjMzNzEyMjIxLCJleHAiOjE2MzM3MTU4MjEsImlhdCI6MTYzMzcxMjIyMSwianRpIjoiZDAyNzBkYzQtMGMzZC00YmJlLTg2NDUtMzBhNDk4YjgzMWQ1IiwiZW1haWwiOiJ1YmlvdC5yYWZhZWxAZ21haWwuY29tIn0.Taw4OJcE1UlKnOjYbRWAJqmAnM07n3AAchY0yGS9f54H0KxVr2MKi4tbkqJtJNk3sscLwuRGZiiKLDS1gJe9lLyZGEynSH31_StgYgNc7uSytCILWydhUN_hG9zzU4kVL53dLLbqLDrqe_gunATNbfT9cwLhPToQCwlmZWY_m6_QktsxtglYieRMvNSPQMS2YTh6gLDfhWEIDdEKMPz94apyJoGE3oQWZogJmkmOzyGVDrPPYe1ohDJaOpPI0B-vtuJX-shSRpTfz_dAHbpN4QplbyPEmH5ov8-6-ygS2n7eZlOH7lQou2Yq00c6CB3e6PbLOgC7-80uUuMncsgsIg&access_token=eyJraWQiOiJ0eDFkaW5OVGlLZmdSNEpPREsxOFhMRURIUENoM1wvcjBZd1ZjNlV5XC9iTlU9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJmM2ZlYjQ4OC02ZjRjLTQyYzYtYjM2OS0xYTY2MTE0M2I5MGMiLCJldmVudF9pZCI6IjJlZjZhM2Y4LTFhZDktNGRkMy1hYjE3LWEzMmI4YWU0NmZmNSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoib3BlbmlkIGh0dHBzOlwvXC90ZWkubG9nby5hY3Rpb25zXC9sb2dvLm9mZiBodHRwczpcL1wvdGVpLmxvZ28uYWN0aW9uc1wvbG9nby5vbiBlbWFpbCIsImF1dGhfdGltZSI6MTYzMzcxMjIyMSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LWNlbnRyYWwtMS5hbWF6b25hd3MuY29tXC9ldS1jZW50cmFsLTFfWkMxeFNrZWY3IiwiZXhwIjoxNjMzNzE1ODIxLCJpYXQiOjE2MzM3MTIyMjEsInZlcnNpb24iOjIsImp0aSI6IjE5N2U5OTlmLWU0MDAtNDY4OS04NjUzLTI1YzZiZTNhNDRlOCIsImNsaWVudF9pZCI6IjdnM2k3ZnB1dW90bDFkN2pqZXZ1MjlwaWxxIiwidXNlcm5hbWUiOiJmM2ZlYjQ4OC02ZjRjLTQyYzYtYjM2OS0xYTY2MTE0M2I5MGMifQ.Txmm4aRDDLxNXJnKgZwA4uC6Ybxns6xX2WNqyycZTiKdbRyIvXiY_5h2CjhhlVrEL55TcDNqS7s80ZBolOm9D9E4EPaifAxN7FfGJM7lGXPg4LHzdEpuA94TpFkFPCk4244NyvhQza63x7RHFvmn7uEQF-HYALNpQTlrlJGHt8R7ZQW6j5SQ-k3xZXPXy4LeV2UWlHtsfq0T5cEGHa64poTs7V4whIwG9b00XxuUEJ5XB32j1YjAOThrELIpdcdBaKdwrweb8FnhWpTIHtg63lvMmP7QGTh9hUet1Kp7YcaVnPUCO_t8YsTvQFMlgMUf51eHpfyUINox8yup_0bs9A&expires_in=3600&token_type=Bearer"

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
  scanData();
  console.log(state);

    if ( state == "01") {
        image.src="../imagenes/iconos/valvulaAbierta.png";
    } else if ( state == "00") {
        image.src="../imagenes/iconos/valvulaCerrada.png";
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

function changeImage() {
        
  if (document.getElementById("derecha").src == "imagenes/iconos/onNewapagado.png") 
  {
      document.getElementById("derecha").src = "imagenes/iconos/onNewapagado.png";
  }
  else 
  {
      document.getElementById("derecha").src = "imagenes/iconos/onNewencendido.png";
      document.getElementById("izquierda").src = "imagenes/iconos/offNewapagado.png";
  }
}

function changeImageoff() {
  
  if (document.getElementById("izquierda").src == "imagenes/iconos/offNewapagado.png") 
  {
      document.getElementById("izquierda").src = "imagenes/iconos/offNewapagado.png";
  }
  else 
  {
      document.getElementById("derecha").src = "imagenes/iconos/onNewapagado.png";
      document.getElementById("izquierda").src = "imagenes/iconos/offNewencendido.png";
  }
  }


setInterval(updateImage, 1000);

window.addEventListener("error", handleError, true);

getId()
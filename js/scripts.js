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
    
  // let token = window.location.href

  let token = "https://d30a2flcb4p1wx.cloudfront.net/#id_token=eyJraWQiOiJiamI5R3lQbFVYeFlaanlpbW9PR1pSNGYxb0FudWp2YlNtNjF0U29EenZFPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiRkVvLVdSZGNHVmM1TTZfRHlOdHlhQSIsInN1YiI6ImYzZmViNDg4LTZmNGMtNDJjNi1iMzY5LTFhNjYxMTQzYjkwYyIsImF1ZCI6IjdnM2k3ZnB1dW90bDFkN2pqZXZ1MjlwaWxxIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjMzOTgyMDI4LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5jb21cL2V1LWNlbnRyYWwtMV9aQzF4U2tlZjciLCJjb2duaXRvOnVzZXJuYW1lIjoiZjNmZWI0ODgtNmY0Yy00MmM2LWIzNjktMWE2NjExNDNiOTBjIiwiZXhwIjoxNjMzOTg1NjI4LCJpYXQiOjE2MzM5ODIwMjgsImp0aSI6ImI0MjkwNWY3LTliZTktNDJhYy04NGJjLTJhMGNlYjNmZmM5ZCIsImVtYWlsIjoidWJpb3QucmFmYWVsQGdtYWlsLmNvbSJ9.o9lzHrNscsGoX1zAIyue1seSHmYQV2uU2xZTsjpl0dicIIoYjFwqWNg7KHmmyVXbFvEEQL2thh3uzzdA43UtTzQ2e17WN8vVHi_3ha5iuNouGQavoqHjyTjHzWxvUtwXo3wUdbbHNnyA-EPLA1rwZHCvjDhtyMzuCDesSdakfvQdZh7CtALxJTbNDO9b8cp2ohBs-3YgtgIYGCtgKo6m1ssr2SfA1cEBLJw_YN1yUXgnasddujPRpWBAkvnQjMSZDxPW6Dcy6ByqY2EoS9gd-L2dT3GYd6FLmtmlYR8FIjx5o8PAG26RG8DzRPGbpnWO3MLkc0lAFJ72klY5xpbhGw&access_token=eyJraWQiOiJ0eDFkaW5OVGlLZmdSNEpPREsxOFhMRURIUENoM1wvcjBZd1ZjNlV5XC9iTlU9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJmM2ZlYjQ4OC02ZjRjLTQyYzYtYjM2OS0xYTY2MTE0M2I5MGMiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6Im9wZW5pZCBodHRwczpcL1wvdGVpLmxvZ28uYWN0aW9uc1wvbG9nby5vZmYgaHR0cHM6XC9cL3RlaS5sb2dvLmFjdGlvbnNcL2xvZ28ub24gZW1haWwiLCJhdXRoX3RpbWUiOjE2MzM5ODIwMjgsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS1jZW50cmFsLTEuYW1hem9uYXdzLmNvbVwvZXUtY2VudHJhbC0xX1pDMXhTa2VmNyIsImV4cCI6MTYzMzk4NTYyOCwiaWF0IjoxNjMzOTgyMDI4LCJ2ZXJzaW9uIjoyLCJqdGkiOiJiMTVmMjg5NC00OGVkLTQyMjQtYjc0MS1jYzM4NjM0NGFhM2QiLCJjbGllbnRfaWQiOiI3ZzNpN2ZwdXVvdGwxZDdqamV2dTI5cGlscSIsInVzZXJuYW1lIjoiZjNmZWI0ODgtNmY0Yy00MmM2LWIzNjktMWE2NjExNDNiOTBjIn0.ESR1FD21kB2KbmKFGyPmouhLMmno3mSp4NrrYYlT4R5-dz1b5svnJNHm7Zg-RuwbH-BPK2E8xBULPfJaw4JoDgAQgGhtevSRgjw3y4irATAMGUfWAkAKbQm3yNFNpjCjCls1fCdbBG1n1NRlWqET4KIX3l45heUdKuh4pl3i14I5vlSbiJKwqwYOqBRYqjgwHJ3r26NSkVuYMxzF4j8ZWBikhN0-hsvRbtwhkdgPBAxTHU3jdMQBF9hxczuKOMd6w98t7MXHZIGQXPRDIOaG7GpXU-tJopDFXB00OY3Aus7C_2dIvROJKkwDMEL1x3wPVdoggXRorpGz-92Jc_lXlw&expires_in=3600&token_type=Bearer"

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

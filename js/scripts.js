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

  let token = "https://d30a2flcb4p1wx.cloudfront.net/#id_token=eyJraWQiOiJiamI5R3lQbFVYeFlaanlpbW9PR1pSNGYxb0FudWp2YlNtNjF0U29EenZFPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoidUpScGpCNWNBSGcyZWdsZGREUHYwQSIsInN1YiI6ImYzZmViNDg4LTZmNGMtNDJjNi1iMzY5LTFhNjYxMTQzYjkwYyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5jb21cL2V1LWNlbnRyYWwtMV9aQzF4U2tlZjciLCJjb2duaXRvOnVzZXJuYW1lIjoiZjNmZWI0ODgtNmY0Yy00MmM2LWIzNjktMWE2NjExNDNiOTBjIiwiYXVkIjoiN2czaTdmcHV1b3RsMWQ3ampldnUyOXBpbHEiLCJldmVudF9pZCI6IjM4ZDljYzU5LTQ0NzMtNDFiOC1hZjk4LTcwNzk5ZmQwNWRhZSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjM0MDcxMTMyLCJleHAiOjE2MzQwNzQ3MzIsImlhdCI6MTYzNDA3MTEzMiwianRpIjoiOTFiOTc0YjctNGVkYS00NGM2LTliNTYtOGUzNjc5ODQ0NTE5IiwiZW1haWwiOiJ1YmlvdC5yYWZhZWxAZ21haWwuY29tIn0.fQJsruJHDx3L7M6iDnHJ0yGze4dsZehcWwdCT2K0jQ-a4qkHCKaFzzax0Ws05IH-qWLXhiQEOJ-QF4NT7cvwTfs8LdJ-_uYFYUUCJibCR3PcL2bFhjOQjwlreZvUB9uCpjW19eY_iXooVijZA3NGhrvI13Q4gNyhLfUGkSCveO-5sgslUxK13D2PpE-5Nip-u8_ym-g26OSGxmEzdgwHSCMr2VLy55EmmDQsyM3VrOaS3EyZQfGFvOTlOMVd8m7-mlEQVgsKu1gxugmrMjPe62w9d0Qt3Pf9XXBMyCUT6dfueS9gsFUaSTMlJRbkX_bpwO-_m9B4YpVXtkcsWsRNxQ&access_token=eyJraWQiOiJ0eDFkaW5OVGlLZmdSNEpPREsxOFhMRURIUENoM1wvcjBZd1ZjNlV5XC9iTlU9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJmM2ZlYjQ4OC02ZjRjLTQyYzYtYjM2OS0xYTY2MTE0M2I5MGMiLCJldmVudF9pZCI6IjM4ZDljYzU5LTQ0NzMtNDFiOC1hZjk4LTcwNzk5ZmQwNWRhZSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoib3BlbmlkIGh0dHBzOlwvXC90ZWkubG9nby5hY3Rpb25zXC9sb2dvLm9mZiBodHRwczpcL1wvdGVpLmxvZ28uYWN0aW9uc1wvbG9nby5vbiBlbWFpbCIsImF1dGhfdGltZSI6MTYzNDA3MTEzMiwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LWNlbnRyYWwtMS5hbWF6b25hd3MuY29tXC9ldS1jZW50cmFsLTFfWkMxeFNrZWY3IiwiZXhwIjoxNjM0MDc0NzMyLCJpYXQiOjE2MzQwNzExMzIsInZlcnNpb24iOjIsImp0aSI6IjM3MDhjZTE1LTBjNzEtNGIzMi1iY2NjLTU5YjcxMzZmY2VhYSIsImNsaWVudF9pZCI6IjdnM2k3ZnB1dW90bDFkN2pqZXZ1MjlwaWxxIiwidXNlcm5hbWUiOiJmM2ZlYjQ4OC02ZjRjLTQyYzYtYjM2OS0xYTY2MTE0M2I5MGMifQ.beBnnOTHyuoSEZ6jFMXuewhnmnKuQX2c-C7NNtCgyuMOAjsQEozpmzazu85yU5IiDZYS_GuSJvJ-8ankApFGOaXqnX9fJ68YsO5KYEt6pARevYXdoW0EUc3CbaHRTSdpAEYuZNBjJXkFKHBWbUv70QqGi5JNYbQ8iluoM6f0BQoJArE_jPJDXItS7scAO0ZOwQ5-ulciF-JR0J2MXzDJmBxtHxqln01zgB4Yr5pRNahGMbzzyq9C6_huBXLWLYZI1aSLqDst5C2iqJOvp4nyOhsvh-JNq0X4V0OPfRpikWVaHkWeadPsN6vokIZjYwytMyCxGNeFURHGuxn5qB105w&expires_in=3600&token_type=Bearer"

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

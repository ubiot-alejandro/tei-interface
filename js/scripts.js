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

  let token = "https://d30a2flcb4p1wx.cloudfront.net/#id_token=eyJraWQiOiJiamI5R3lQbFVYeFlaanlpbW9PR1pSNGYxb0FudWp2YlNtNjF0U29EenZFPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiUV9XcEVzRjhUVUhHY3dFa2FuX2NiZyIsInN1YiI6ImYzZmViNDg4LTZmNGMtNDJjNi1iMzY5LTFhNjYxMTQzYjkwYyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5jb21cL2V1LWNlbnRyYWwtMV9aQzF4U2tlZjciLCJjb2duaXRvOnVzZXJuYW1lIjoiZjNmZWI0ODgtNmY0Yy00MmM2LWIzNjktMWE2NjExNDNiOTBjIiwiYXVkIjoiN2czaTdmcHV1b3RsMWQ3ampldnUyOXBpbHEiLCJldmVudF9pZCI6IjFhMGIxM2RmLTlhNGUtNGM0MS1hMmVkLTEyMTIwZjIxOTFiMyIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjMzMDkzNjE3LCJleHAiOjE2MzMwOTcyMTcsImlhdCI6MTYzMzA5MzYxNywianRpIjoiOTkzNGVkOGQtZjIyOC00NTNkLTg0MzYtNjk0N2M2MGMwMDUxIiwiZW1haWwiOiJ1YmlvdC5yYWZhZWxAZ21haWwuY29tIn0.kXApArewXKFHef6wbB7hJzIoAGc5wiV3l-fYvV1scbn6Cq5ZYHhzPxG5hXDOvsD1SQ2YfOFUWTJ5WvNI74y_-3gU5_5kMc-ZNMc3ZsxcuQkToFCcVPYO4rFW778zyBOtkwm8hjltx-N6FkUz9BbTljpzlmgGE290T-wKRB8ZVdV-Yl_zkJ1txC4iEJXucC1H9sID8MR4EY1mAhBAIe2bRs1kpuP3--rSbU1N9WLU1tdyVm3focsGWVaCefXbI8i5e5RQqqxObpNLGXBHqJyZuWE9bhH8crMuArNZidaKhXiu8aOM9Ky1D0CgHl1gSnXEHyE2NVJy0tLlGM7i9N4Wcg&access_token=eyJraWQiOiJ0eDFkaW5OVGlLZmdSNEpPREsxOFhMRURIUENoM1wvcjBZd1ZjNlV5XC9iTlU9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJmM2ZlYjQ4OC02ZjRjLTQyYzYtYjM2OS0xYTY2MTE0M2I5MGMiLCJldmVudF9pZCI6IjFhMGIxM2RmLTlhNGUtNGM0MS1hMmVkLTEyMTIwZjIxOTFiMyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoib3BlbmlkIGh0dHBzOlwvXC90ZWkubG9nby5hY3Rpb25zXC9sb2dvLm9mZiBodHRwczpcL1wvdGVpLmxvZ28uYWN0aW9uc1wvbG9nby5vbiBlbWFpbCIsImF1dGhfdGltZSI6MTYzMzA5MzYxNywiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LWNlbnRyYWwtMS5hbWF6b25hd3MuY29tXC9ldS1jZW50cmFsLTFfWkMxeFNrZWY3IiwiZXhwIjoxNjMzMDk3MjE3LCJpYXQiOjE2MzMwOTM2MTcsInZlcnNpb24iOjIsImp0aSI6IjEzMDI0MjE3LTFlNzMtNGZiMy04NzZhLWFiZWMxZDVjNTNkNyIsImNsaWVudF9pZCI6IjdnM2k3ZnB1dW90bDFkN2pqZXZ1MjlwaWxxIiwidXNlcm5hbWUiOiJmM2ZlYjQ4OC02ZjRjLTQyYzYtYjM2OS0xYTY2MTE0M2I5MGMifQ.Osncw0_ELseA3AtTgCr6jW2yf1gXlBFgpsnKVU1xxI5AoBlvmw1PGeLkMOlStXZNvQo0DlWvDaqx1qSrKBgPOavHqoxt2DAG352A_QVZ406lnUi0qBxA-AkDjEevuXMUxorkd2urlvPSWrZxeErFAlvlzPwMCBzOGMZhvRLEeV5ajELyIfJ976QroZ383o4crovSsAmcL1wM2cOW871y9idEplcwz4gjdpJ3LBFoLfaJ7RRz16bZar_sGkZpXxuSivV-U8o7qi1zA6-KHxHSKxUExrvpJP4nWYhSNNhIYdremWlwJSm9ToNet4vkE5RH3qTL-22ylkbX-oirAfmBHw&expires_in=3600&token_type=Bearer"

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
  scanData();
  console.log(state);

    if ( state == "01") {
        image.src="../imagenes/iconos/valvulaAbierta.png";
    } else if ( state == "00") {
        image.src="../imagenes/iconos/valvulaCerrada.png";
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
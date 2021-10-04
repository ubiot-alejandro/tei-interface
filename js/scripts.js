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

  let token = "https://d30a2flcb4p1wx.cloudfront.net/#id_token=eyJraWQiOiJiamI5R3lQbFVYeFlaanlpbW9PR1pSNGYxb0FudWp2YlNtNjF0U29EenZFPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiSmhCVUs4NWUzWm1XaldvVFNpMTRjUSIsInN1YiI6ImYzZmViNDg4LTZmNGMtNDJjNi1iMzY5LTFhNjYxMTQzYjkwYyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5jb21cL2V1LWNlbnRyYWwtMV9aQzF4U2tlZjciLCJjb2duaXRvOnVzZXJuYW1lIjoiZjNmZWI0ODgtNmY0Yy00MmM2LWIzNjktMWE2NjExNDNiOTBjIiwiYXVkIjoiN2czaTdmcHV1b3RsMWQ3ampldnUyOXBpbHEiLCJldmVudF9pZCI6IjQzN2QzNjBkLTExYjYtNDkwNy04ZDg3LTY1NjNhNzZmYTFhYSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjMzMzU4NDUyLCJleHAiOjE2MzMzNjIwNTIsImlhdCI6MTYzMzM1ODQ1MiwianRpIjoiM2FhZDNmNzgtNjNlNy00ZWEyLTg3MjQtNGQzNTI0MjJmYTc5IiwiZW1haWwiOiJ1YmlvdC5yYWZhZWxAZ21haWwuY29tIn0.eHBG9jbpyQSl2iQ714rnQPLFdDqagEezSCAuvBfu9p5Uwciq3qXPRZj_AEmhO5CPSVO_3P4UX4_AfyNQVSADpBb6M9iKqeDY2wmVHZYbEC8fNuIz0MSIwI_Zh9bdSill_9tpUhnlEoAhC-5qOssKC4vt100reP0_4aKWE9dPSijJO-iutG0mGM81iRbHdkTo8b6ZF4ZQZmBB4N-hc3qeq9SimsqXM38Cgcju6SSwKguz3fAEykR4t0MlpAZ81zyVIncMzPpykqJDgFfd7KrVK12lnc6STjorVbOYCr0q32HFZDzNgH65Zs4U_YMqKxbSNsFEqhWe8URpsL40uq_H2A&access_token=eyJraWQiOiJ0eDFkaW5OVGlLZmdSNEpPREsxOFhMRURIUENoM1wvcjBZd1ZjNlV5XC9iTlU9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJmM2ZlYjQ4OC02ZjRjLTQyYzYtYjM2OS0xYTY2MTE0M2I5MGMiLCJldmVudF9pZCI6IjQzN2QzNjBkLTExYjYtNDkwNy04ZDg3LTY1NjNhNzZmYTFhYSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoib3BlbmlkIGh0dHBzOlwvXC90ZWkubG9nby5hY3Rpb25zXC9sb2dvLm9mZiBodHRwczpcL1wvdGVpLmxvZ28uYWN0aW9uc1wvbG9nby5vbiBlbWFpbCIsImF1dGhfdGltZSI6MTYzMzM1ODQ1MiwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LWNlbnRyYWwtMS5hbWF6b25hd3MuY29tXC9ldS1jZW50cmFsLTFfWkMxeFNrZWY3IiwiZXhwIjoxNjMzMzYyMDUyLCJpYXQiOjE2MzMzNTg0NTIsInZlcnNpb24iOjIsImp0aSI6ImQxNDFiNWRhLTc2ODctNDUyMy1iYmI3LWRlNWViYmIzZmNlZiIsImNsaWVudF9pZCI6IjdnM2k3ZnB1dW90bDFkN2pqZXZ1MjlwaWxxIiwidXNlcm5hbWUiOiJmM2ZlYjQ4OC02ZjRjLTQyYzYtYjM2OS0xYTY2MTE0M2I5MGMifQ.WT3AiCFlXyNyoh62dl1Qjf9Sttr-IjoG2JEErFvchxeUmNSAGIpG1w5AfJwAD7Q-9l9mp3yh5_wQCq1lqIYbpnSXnv_gweRgBRAPc0MV-NElMlWJ8Ydup6HjHba9M6li8RjRPnNWr90rhjPv_TMrzBD9JKvSJG1WewhV3PC_U_sZGakngsAOVrzfGG2651x2hx3vZ-8VvmvYIXQyhMM_m7-2u9R1GXFihArob_DMM1ywi7O9lt6ePXj2R4GlVXtulnAoj8R5cd9TRRoT6YbSHyr4IOYQcNq1IXlaGQvBjNC1pCgRH7hs5o91Myc-jusPSwKpkgNoPM4nfwFD-dDELQ&expires_in=3600&token_type=Bearer"

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
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

  let url="https://vdawi12xzl.execute-api.eu-central-1.amazonaws.com/default/on-function";
    
    fetch(url, {
      mode: 'cors',
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : auth
      }
    })
    .then(data=>{return data.json})
    .then(res=>{console.log(res)});
}

function invokeOFF() {    
  
  let token = window.location.href

  let auth = token.split('&')[1].split('=')[1]
  
  let url="https://8hf8zi8mvd.execute-api.eu-central-1.amazonaws.com/default/off-function";
    
    fetch(url, {
      mode: 'cors',
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : auth
      }
    })
    .then(data=>{return data.json})
    .then(res=>{console.log(res)});
}

function updateImage() {
  var image = document.getElementById("derecha1");
  scanData();
  console.log(state);

    if ( state == "01") {
        image.src="../images/on.png";
    } else {
        image.src="../images/off.png";
    }
}

function handleError(evt) {
  if (evt.message) {

    console.log(evt.message)

    if (evt.message == `Uncaught TypeError: Cannot read properties of undefined (reading 'split')`) {

      alert("Por favor inicie sesion antes...")
      window.location.href = "https://tei.auth.eu-central-1.amazoncognito.com/login?client_id=7g3i7fpuuotl1d7jjevu29pilq&response_type=token&scope=email+https://tei.logo.actions/logo.off+https://tei.logo.actions/logo.on+openid&redirect_uri=https://d30a2flcb4p1wx.cloudfront.net";

    }

  }
}

setInterval(updateImage, 1000);

window.addEventListener("error", handleError, true);
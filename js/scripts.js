function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
}

function onSignIn(googleUser) {
  // Useful data for your client-side scripts:
  var profile = googleUser.getBasicProfile();
  userFullName = profile.getName();
  userId = profile.getId();     
  console.log('Full Name: ' + profile.getName());
  console.log("Email: " + profile.getEmail());
  console.log(userId);

  // The ID token you need to pass to your backend:
  var id_token = googleUser.getAuthResponse().id_token;
  userToken = id_token;
};

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  //userId = 123456789
  auth2.signOut().then(function () {
      logMessage('User signed out.');
      logMessage('');
  });
  window.location.reload();
}

function invokeON() {
  var url="https://5wqbphn9p1.execute-api.us-east-2.amazonaws.com/default/on-function" + "?id=" + userId;
  fetch(url, {mode:'no-cors'})
  .then(data=>{return data.json})
  .then(res=>{console.log(res)})
}

function invokeOFF() {    
  var url= "https://7346aseqs8.execute-api.us-east-2.amazonaws.com/default/off-function" + "?id=" + userId;
  fetch(url, {mode:'no-cors'})
  .then(data=>{return data.json})
  .then(res=>{console.log(res)})
}

function updateImage() {
  var image = document.getElementById("img");
  scanData();
  console.log(state);

    if ( state == "01") {
        image.src="../images/on.png";
    } else {
        image.src="../images/off.png";
    }
}

function handleError(evt) {
  if (evt.message) { // Chrome sometimes provides this
    //alert("error: "+evt.message +" at linenumber: "+evt.lineno+" of file: "+evt.filename);
    alert("Sorry! Please Login with an authenticated user...")
  }
  // else {
  //  alert("error: "+evt.type+" from element: "+(evt.srcElement || evt.target));
  //}
}

function logMessage(message){
  $('#log').append(message + '</br>');
}

setInterval(updateImage, 1000);

window.addEventListener("error", handleError, true);
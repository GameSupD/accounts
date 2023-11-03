function register() {
  var x = document.getElementById("username").value;
  if (x.length < 21) {
  if (x.includes(",")) {
  document.getElementById("message").innerHTML = "Your username can't have any comma.";
  }
  else {
  if (x == "") {
  document.getElementById("message").innerHTML = "Your username can't be empty.";
  }
  else {
  localStorage.setItem("username", x);
  localStorage.setItem("pfp", "https://raw.githubusercontent.com/SuperGames-D/GameSup/main/pfp/pfp0.png");
  localStorage.setItem("loggedin", "true");
    document.getElementById("message").innerHTML = "Your account has been created!";
    window.location.href = 'https://gamesupd.github.io/accounts/welcome';
    }
  }
}
else {
document.getElementById("message").innerHTML = "Your username can't have more than 20 characters.";
}
}


function showUsername() {
var loggedin = localStorage.getItem("loggedin");
  if (loggedin.includes("true")) {
  document.getElementById("text").innerHTML = localStorage.getItem("username");
  document.getElementById("lostworld").innerHTML = localStorage.getItem("lostworld");
}
}

function deleteAccount() {
localStorage.clear();
document.getElementById("message").innerHTML = "Your account has been deleted";
}

function logOut() {
localStorage.setItem("loggedin", "");
location.reload();
}

function login() {
if (localStorage.getItem("username").length == "0") {

}
else{
  localStorage.setItem("loggedin", "true");
  document.getElementById("text").innerHTML = localStorage.getItem("username");
}
}

function getLocalStorage() {
    var a = {};
    for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        var v = localStorage.getItem(k);
        a[k] = v;
    }
    var s = JSON.stringify(a);
    document.getElementById("message").innerHTML = "Copy this text:";
    document.getElementById("datashow").innerHTML = s;
}

function writeLocalStorage() {
    localStorage.clear();
    var o = document.getElementById("data").value;
    var o = JSON.parse(o);
    for (var property in o) {
        if (o.hasOwnProperty(property)) {
            localStorage.setItem(property, o[property]);
        }
    }
    document.getElementById("message2").innerHTML = "Your data has been recovered";
}

function hello() {
var loggedin = localStorage.getItem("loggedin");
  if (loggedin.includes("true")) {
  document.getElementById("text").innerHTML = "Hello, " + localStorage.getItem("username");
  document.getElementById("pfp").src = localStorage.getItem("pfp");
  if (loggedin.includes("true")) {document.getElementById("profile").href = "https://gamesupd.github.io/accounts/login.html"
                                 }
  document.getElementById("profile").href = "https://gamesupd.github.io/accounts/profile.html?user=" + localStorage.getItem("username") + "&pfp=" + localStorage.getItem("pfp") + "&desc=" + localStorage.getItem("description");
}
}

function welcome() {
var loggedin = localStorage.getItem("loggedin");
  if (loggedin.includes("true")) {
  document.getElementById("text").innerHTML = "Welcome, " + localStorage.getItem("username") + "!";
}
}

function changeusername() {
  var x = document.getElementById("username").value;
  if (x.length < 21) {
  if (x.includes(",")) {
  document.getElementById("message").innerHTML = "Your username can't have any comma.";
  }
  else {
  if (x == "") {
  document.getElementById("message").innerHTML = "Your username can't be empty.";
  }
  else {
  localStorage.setItem("username", x);
    document.getElementById("message").innerHTML = "Your username has been changed!";
    }
  }
}
else {
document.getElementById("message").innerHTML = "Your username can't have more than 20 characters.";
}
}

function pfp() {
var loggedin = localStorage.getItem("loggedin");
  if (loggedin.includes("true")) {
  document.getElementById("pfp").src = localStorage.getItem("pfp")
  }
  else {
  window.location.href = 'https://gamesupd.github.io/accounts';
  }

}

function pfpchange(pfp) {
var url = "https://raw.githubusercontent.com/SuperGames-D/GameSup/main/pfp/pfp" + pfp.toString() + ".png";
  localStorage.setItem("pfp", url);
  document.getElementById("pfp").src = localStorage.getItem("pfp");
}

function pfpurl() {
var url = document.getElementById("custompfp").value;
  localStorage.setItem("pfp", url);
  document.getElementById("pfp").src = localStorage.getItem("pfp");
}

function profile() {
let params = new URL(document.location).searchParams;
  let user = params.get("user");
  let pfp = params.get("pfp");
  let desc = params.get("desc");
  document.getElementById("pfp").src = pfp;
  document.getElementById("text").innerHTML = user;
  document.getElementById("description").value = desc;
  document.getElementById("pagetitle").innerHTML = user + " on GameSup"
  if (user == localStorage.getItem("username")) {
  document.getElementById("description").removeAttribute("readonly");
  }
}

function updateDesc() {
let params = new URL(document.location).searchParams;
let user = params.get("user");
 if (user == localStorage.getItem("username")) {
let desc = document.getElementById("description").value;
localStorage.setItem("description", desc);
}
}

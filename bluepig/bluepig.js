function save() {
var loggedin = localStorage.getItem("loggedin");
  if (loggedin.includes("true")) {
  var user_prev = localStorage.getItem("username");
  var length = 20 - user_prev.length;
  var string = ","
  var prev = string.repeat(length);

  let params = new URL(document.location).searchParams;
    let score = params.get("score");
    let skin = params.get("skin");
    var length2 = 4 - score.length;
  var string2 = ","
  var prevScore = string.repeat(length2);

  var x = "BP" + prevScore + score + skin + prev + localStorage.getItem("username");
  localStorage.setItem("bluepig", x);
  document.getElementById("message").innerHTML = "Your data has been saved. You may now go back to the game.";
  }
  else {
  document.getElementById("message").innerHTML = "You are not logged in to your GameSup account. Please login.";
  }
}

function showUsername() {
var loggedin = localStorage.getItem("loggedin");
  if (loggedin.includes("true")) {
  document.getElementById("text").innerHTML = localStorage.getItem("username");
  document.getElementById("bluepig").innerHTML = localStorage.getItem("bluepig");
}
}

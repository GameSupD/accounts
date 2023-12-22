function save() {
var loggedin = localStorage.getItem("loggedin");
  if (loggedin.includes("true")) {
  var user_prev = localStorage.getItem("username");
  var length = 20 - user_prev.length;
  var x = ","
  var prev = x.repeat(length);
  let params = new URL(document.location).searchParams;
  let level = String(params.get("level"));
  let done = String(params.get("done"));
  let settings = String(params.get("fullscreen")) + String(params.get("wasd")) + String(params.get("textbox"));
  let bonusScore = String(params.get("bonus"));
  var save_data = level + done + settings + bonusScore;
  var code = "LW" + save_data + prev + localStorage.getItem("username");
  localStorage.setItem("lostworld", code);
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
  document.getElementById("lostworld").innerHTML = localStorage.getItem("lostworld");
}
}

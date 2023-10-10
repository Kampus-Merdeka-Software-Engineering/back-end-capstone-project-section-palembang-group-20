function logOut() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "home.html";
}

document.addEventListener("DOMContentLoaded", () => {
  let token = localStorage.getItem("token");

  if (!token) {
    console.log("Token is empty.");
    let el = `<button onclick="window.location.href='login.html'" type="button" class="button-login">Login</button>`;
    document.getElementById("navbar-button").innerHTML += el;
  } else {
    let el = `<button onclick="logOut()" type="button" id="logout-btn" class="button-login">Logout</button>`;
    document.getElementById("navbar-button").innerHTML += el;
  }
});

// Simple login system
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  // Your custom login credentials
  if (user === "shreeram" && pass === "esp32pass") {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("content-section").style.display = "block";
  } else {
    document.getElementById("login-msg").innerText = "Invalid credentials!";
  }
}

// Fetch live dB value from ESP32
async function updateDB() {
  try {
    // Replace with your ESP32 IP
    let response = await fetch("http://192.168.x.x/db");
    let text = await response.text();

    document.getElementById("db-value").innerText = text + " dB";
    document.getElementById("time").innerText = new Date().toLocaleTimeString();
  } catch (e) {
    document.getElementById("db-value").innerText = "--";
    document.getElementById("time").innerText = "ESP32 not reachable";
  }
}

// Refresh every 2 seconds
setInterval(updateDB, 2000);
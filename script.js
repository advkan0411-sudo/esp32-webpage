const ESP32_IP = "http://10.184.247.20"; // Replace with your ESP32 IP from Serial Monitor

function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  if (user === "admin" && pass === "1234") {
    document.getElementById('login-msg').innerText = "Login successful!";
    document.getElementById('login-section').style.display = "none";
    document.getElementById('content-section').style.display = "block";
  } else {
    document.getElementById('login-msg').innerText = "Invalid credentials!";
  }
}

// Fetch live sensor data every 2 seconds
setInterval(() => {
  fetch(`${ESP32_IP}/data`)
    .then(response => response.json())
    .then(data => {
      document.getElementById('db-value').innerText = data.db;
      document.getElementById('time').innerText = data.time;
    })
    .catch(err => console.error("Error fetching data:", err));
}, 2000);

// Fetch serial logs every 3 seconds
setInterval(() => {
  fetch(`${ESP32_IP}/logs`)
    .then(response => response.text())
    .then(logs => {
      document.getElementById('serial-output').innerText = logs;
    })
    .catch(err => console.error("Error fetching logs:", err));
}, 3000);
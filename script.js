function login() {
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;

  // Simulasi login
  if (phone === "08123456789" && password === "password123") {
    window.location.href = "dashboard.html";
  } else {
    alert("Nomor atau password salah!");
  }
}
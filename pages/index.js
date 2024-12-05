document.getElementById("btn").addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    });
   if (response.ok) {
    const data = await response.json();
    localStorage.setItem("token", data.token);
     alert("Login successful");
   }
    
})
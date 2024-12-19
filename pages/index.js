document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("Username").value;
    const password = document.getElementById("Password").value;
    const response = await fetch("http://localhost:3000", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name : username, password }),
    });
   if (response.ok) {
    const data = await response.json();
    localStorage.setItem("token", data.token);
     alert("Login successful");
     //redirect to the profile page
     window.location.href = "profile.html";
    
   }else{
    alert("Login failed")
   }
    
})
async function fetchProfile() {
    const token = localStorage.getItem("token");
    if (!token){
      alert("You are not logged in");
      window.location.href = "index.html";
      return;
    }
    try {
      const response = await fetch("http://localhost:3000/profile ", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

  if (response.ok) {
    const data = await response.json();
   document.getElementById("profile").innerHTML = `<p>${data.name}</p>`
  }else{
    alert("cannot fetch profile")
    window.location.href = "login.html";
  }

  
}catch (error) {
    console.error(error);
    alert("cannot fetch profile")
    window.location.href = "login.html";
  }
}

fetchProfile();
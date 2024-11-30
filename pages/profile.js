async function fetchProfile() {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:3000/profile", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
  const profile = document.getElementById("profile");
  if (response.ok) {
    const data = await response.json();
    profile.innerHTML = `<p>Name: ${data.user.name}</p>`;
  }
}

fetchProfile();
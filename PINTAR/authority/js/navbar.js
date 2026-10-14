// Get current page
const currentPage = window.location.pathname.split("/").pop();

// Highlight active navigation link
const links = document.querySelectorAll("nav a");

links.forEach(link => {

    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    } else {
        link.classList.remove("active");
    }

});



const logout = document.getElementById("logoutBtn");

if (logout) {
    logout.addEventListener("click", () => {

        localStorage.clear();

        window.location.href = "../index.html";

    });
}
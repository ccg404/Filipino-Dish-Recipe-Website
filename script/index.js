const modal = document.getElementById("popUp1");

const toggleButton = document.querySelector(".toggleButton").onclick = () => {
    modal.style.display = "flex";
}

document.getElementById("btnClose").onclick = () => {
    modal.style.display = "none";
}


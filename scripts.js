function showTip(tipId) {
    const tip = document.getElementById(tipId);
    if (tip.style.display === "none" || tip.style.display === "") {
        tip.style.display = "block";
    } else {
        tip.style.display = "none";
    }
}

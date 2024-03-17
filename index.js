

function menuAnimation() {
    document.querySelector(".menu-icon").classList.toggle("change");
    document.querySelector(".sub-menu-wrap").classList.toggle("sub-menu-open");
}
// eventlistener to change the backgrounds
document.querySelector(".donate_now").addEventListener("mouseover", function () {
    document.querySelector(".donate_now").style.backgroundImage = "url(./Images/trust2.png)";
});
document.querySelector(".donate_now").addEventListener("mouseout", function () {
    document.querySelector(".donate_now").style.backgroundImage = "url(./Images/trust1.png)";
});

document.querySelector(".about").addEventListener("mouseover", function () {
    document.querySelector(".about").style.backgroundImage = "url(./Images/vit2.webp)";
    // document.querySelector(".container-1").style.backgroundImage = "url(./Images/vit2.webp)";
});
document.querySelector(".about").addEventListener("mouseout", function () {
    document.querySelector(".about").style.backgroundImage = "url(./Images/vit1.jpg)";
    // document.querySelector(".container-1").style.backgroundImage = "none";
});

document.querySelector(".claim_money").addEventListener("mouseover", function () {
    document.querySelector(".claim_money").style.backgroundImage = "url(./Images/claim2.jpg)";
});
document.querySelector(".claim_money").addEventListener("mouseout", function () {
    document.querySelector(".claim_money").style.backgroundImage = "url(./Images/claim1.jpg)";
});
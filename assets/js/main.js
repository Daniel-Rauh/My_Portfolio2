let bigPic = document.getElementById("image-zoom")
let btn = document.getElementById("x-button")
function expandPic() {
    bigPic.style.width = "130%"
    bigPic.style.height = "100%"
    btn.style.display = "block"
}
function closePic() {
    bigPic.style.width = "0%"
    bigPic.style.height = "0%"
    btn.style.display = "none"
}
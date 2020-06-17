let flag = true
let cont = 1.0

function contraste() {
    let x = document.getElementById("css")


    if (flag) {
        x.setAttribute("href", "assets/css/contraste.css")
        flag = false
    } else {
        x.setAttribute("href", "assets/css/style.css")
        flag = true
    }
}

function maiszoom() {
    let x = document.getElementById("zoom")
    cont += 0.1
    x.style.zoom = cont
}

function menoszoom() {
    let x = document.getElementById("zoom")
    cont -= 0.1
    x.style.zoom = cont
}
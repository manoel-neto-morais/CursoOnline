let flag = true
let cont = 1
let flagzoom = true

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

function calibrazoom() {

    if (window.innerWidth < 600) {
        cont = 0.7
    }

}

function maiszoom() {

    if (flagzoom) {
        calibrazoom()
        flagzoom = false
    }

    let x = document.getElementById("zoom")
    cont += 0.1
    x.style.zoom = cont
}


function menoszoom() {

    if (flagzoom) {
        calibrazoom()
        flagzoom = false
    }

    let x = document.getElementById("zoom")
    cont -= 0.1
    x.style.zoom = cont
}
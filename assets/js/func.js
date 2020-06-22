let flag = true
let cont = 1
let flagzoom = true



window.addEventListener("scroll", event => {
    let topo = document.documentElement.scrollTop;
    let altura = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let progress = 100 * topo / altura;

    if (progress > 0) {
        document.querySelector(".progress").style.width = progress + "%";
        document.querySelector(".progress").innerHTML = parseInt(progress) + "%";
    }


})


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



// Aciona os recursos de popover 

$(function() {
    $('[data-toggle="popover"]').popover()
})
$(() => {

    $('#info').on('click', e => {
        $('[data-toggle="popover"]').popover("toggle");
    })

})

// altera valores padrão do popover

$(function() {
    $('[data-toggle="popover"]').popover({ html: true })
})



//chamadas do tooltip
$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})
$(() => {

    $('#info').on('click', e => {
        $('[data-toggle="tooltip"]').tooltip("toggle");
    })

})
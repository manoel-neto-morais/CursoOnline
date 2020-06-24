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



//tornando um objeto arrastável
var dragMe = document.getElementById("drag_me");
/* o x inicial do drag*/
dragOfX = 0;
/* o y inicial do drag */
dragOfY = 0;

/* ao segurar o elemento */
function dragStart(e) {
    /* define o x inicial do drag */
    dragOfX = e.pageX - dragMe.offsetLeft;
    /* define o y inicial do drag */
    dragOfY = e.pageY - dragMe.offsetTop;

    /* adiciona os eventos */
    addEventListener("mousemove", dragMove);
    addEventListener("mouseup", dragEnd);
    addEventListener("touchmove", dragMove);
    addEventListener("touchend", dragEnd);
}

/* ao ser arrastado */
function dragMove(e) {
    /* atualiza a posição do elemento */
    dragMe.style.left = (e.pageX - dragOfX) + 'px';
    dragMe.style.top = (e.pageY - dragOfY + 200) + 'px';
}

/* ao terminar o drag */
function dragEnd() {
    /* remove os eventos */
    removeEventListener("mousemove", dragMove);
    removeEventListener("mouseup", dragEnd);
    removeListener("touchmove", dragMove);
    removeListener("touchend", dragEnd);
}

/* adiciona o evento que começa o drag */
dragMe.addEventListener("mousedown", dragStart);

function changeicon() {
    var icone = document.querySelector(".access-button")
    icone.setAttribute("src", "assets/img/libras_verde.png")
    var popup = document.querySelector(".pop-up")
    popup.setAttribute("src", "assets/img/popup_verde.png")
}
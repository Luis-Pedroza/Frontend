/********** REPRODUCTOR DE AUDIO **********
********** By Pedroza Moranchel Luis Fernando ********** */

var imagenes = new Array(4)
var cancion = new Array(4)
var autor = new Array(4)
var musica = new Array(4)
var contador = 0

imagenes[0] = "audio/uno.jpg"
imagenes[1] = "audio/dos.jpg"
imagenes[2] = "audio/tres.jpg"
imagenes[3] = "audio/cuatro.jpg"

cancion[0] = "New Gold"
cancion[1] = "Hanuman"
cancion[2] = "FOREVER"
cancion[3] = "Soldier, Poet, King"

autor[0] = "Gorillaz"
autor[1] = "Rodrigo y Gabriela"
autor[2] = "Flight Facilities"
autor[3] = "The Oh Hellos"

musica[0] = 'audio/uno.mp3'
musica[1] = 'audio/dos.mp3'
musica[2] = 'audio/tres.mp3'
musica[3] = 'audio/cuatro.mp3'


//cambiar y reproducir cancion anterior (imagen, titulo, autor, archivo)
function atras() {
    contador--
    document.images.img.src = imagenes[contador]
    document.getElementById("cancion").innerText = cancion[contador]
    document.getElementById("autor").innerText = autor[contador]
    document.getElementById("audio").src = musica[contador]
    document.getElementById("audio").play()
    if (contador < 0) {
        contador = 3
        document.images.img.src = imagenes[contador]
        document.getElementById("cancion").innerText = cancion[contador]
        document.getElementById("autor").innerText = autor[contador]
        document.getElementById("audio").src = musica[contador]
        document.getElementById("audio").play()
    }
    document.getElementById("pause").style.display = "block"
    document.getElementById("play").style.display = "none"
}
//cambiar y reproducir cancion siguiente (imagen, titulo, autor, archivo)
function adelante() {
    contador++
    document.images.img.src = imagenes[contador]
    document.getElementById("cancion").innerText = cancion[contador]
    document.getElementById("autor").innerText = autor[contador]
    document.getElementById("audio").src = musica[contador]
    document.getElementById("audio").play()
    if (contador >= 4) {
        contador = 0
        document.images.img.src = imagenes[contador]
        document.getElementById("cancion").innerText = cancion[contador]
        document.getElementById("autor").innerText = autor[contador]
        document.getElementById("audio").src = musica[contador]
        document.getElementById("audio").play()
    }
    document.getElementById("pause").style.display = "block"
    document.getElementById("play").style.display = "none"
}
//reproducir archivo de audio, mostar boton pause
function reproducir() {
    document.getElementById("audio").play()
    document.getElementById("pause").style.display = "block"
    document.getElementById("play").style.display = "none"
}
//pausar archivo de audio, mostrar boton play
function pausar() {
    document.getElementById("audio").pause()
    document.getElementById("pause").style.display = "none"
    document.getElementById("play").style.display = "block"
}
//activar y desactivar audio, mostrar y ocultar boton mute
function OFF() {
    document.getElementById("ON").style.display = "none"
    document.getElementById("OFF").style.display = "block"
    document.getElementById("audio").muted = true
}
function ON() {
    document.getElementById("ON").style.display = "block"
    document.getElementById("OFF").style.display = "none"
    document.getElementById("audio").muted = false
}
//mostar duracion de la cancion (tiempo en min y barra de progreso)
function barra() {
    var porcentaje = 100 / (document.getElementById("audio").duration)
    var tiempo = document.getElementById("audio").currentTime
    document.getElementById("audio").addEventListener("timeupdate", barra)

    tiempo = tiempo / 60
    min = tiempo.toFixed(2)
    document.getElementById("duracion").innerText = min
    document.getElementById("tiempo").style.width = (document.getElementById("audio").currentTime * porcentaje) + "%"
}
//mostrar lista de canciones
function mostrar_lista() {
    var ventana = document.getElementById("ventana_lista")
    if (ventana.style.display == "block") {
        ventana.style.display = "none"
    }
    else { ventana.style.display = "block" }
}
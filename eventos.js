
document.getElementById('boton').addEventListener('click', function () {
    alert("Mensaje enviado exitosamente")
    console.log('Mensaje recibido exitosamente')
})

document.getElementById('boton2').addEventListener('click', function () {
    document.getElementById('boton2').style.backgroundColor = 'black';
})

document.getElementById('boton2').addEventListener('click', function () {
    document.getElementById('boton2').innerHTML = "<a href=http://google.com>Enlace al proyecto</a>";
})

document.getElementById('boton3').addEventListener('click', function () {
    document.getElementById('boton3').style.backgroundColor = 'black';
})

document.getElementById('boton3').addEventListener('click', function () {
    document.getElementById('boton3').innerHTML = "<a href=http://google.com>Enlace al proyecto</a>";
})
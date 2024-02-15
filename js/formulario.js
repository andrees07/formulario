function enviarFormulario(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma convencional

    // Obtiene los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;

    // Imprime los valores en la consola del navegador
    console.log("Nombre:", nombre);
    console.log("Correo Electrónico:", correo);
    console.log("asunto" , asunto);
    console.log("Mensaje:", mensaje);
}

function resetearFormulario() {
    console.log("Formulario reseteado");
}
function CalcularEdad()
{
    var fechaNac = new Date(document.getElementById("Fecha").value);

    var fechaActual = new Date();

    var edad = fechaActual.getFullYear() - fechaNac.getFullYear();

    document.getElementById("Edad").value = edad;
}
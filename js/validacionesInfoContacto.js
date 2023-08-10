const nombre = document.getElementById("Nombre")
const apellido = document.getElementById("Apellidos")
const email = document.getElementById("Correo")
const fecha = document.getElementById("Fecha")
const form = document.getElementById("form")
const parrafoEmail = document.getElementById("warningsEmail")
const parrafoNombre = document.getElementById("warningsNombre")
const parrafoApellido = document.getElementById("warningsApellido")
const parrafoFecha = document.getElementById("warningsFecha")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warningsEmail = ""
    let warningsNombre = ""
    let warningsApellido = ""
    let warningsFecha = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafoEmail.innerHTML = ""
    parrafoNombre.innerHTML = ""
    if(nombre.value.length <4){
        warningsNombre += `El nombre no es valido <br>`
        entrar = true
    }

    if (apellido.value.length < 4)
    {
        warningsApellido += `El Apellido no es valido <br>`
        entrar = true
    }

    if (fecha.value === "")
    {
        warningsFecha += `La fecha no es valida <br>`
        entrar = true
    }

    if(!regexEmail.test(email.value)){
        warningsEmail += `El email no es valido <br>`
        entrar = true
    }

    if(entrar){
        parrafoEmail.innerHTML = warningsEmail
        parrafoNombre.innerHTML = warningsNombre
        parrafoApellido.innerHTML = warningsApellido
        parrafoFecha.innerHTML = warningsFecha
    }
    else
    {
        form.submit();
    }
})
console.log("Inicio")

const mostrar = () => {
    console.log("Parametros: ")
    let user = document.getElementById("user")
    let password = document.getElementById("password")
    console.log(user.value)
    console.log(password.value)

    let formulario = document.getElementsByTagName("form")
    console.log("Formulario")
    user.setAttribute("name", "q")
    password.setAttribute("password", "password")
    formulario[0].setAttribute("action", "https://google.com/search")
    formulario[0].submit()
}
const boton = document.getElementById("enviar")
boton.addEventListener("click", mostrar)
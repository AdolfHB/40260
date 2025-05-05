console.log("Inicio")

const boton = document.getElementById("enviar")
boton.addEventListener("click", 
    () => {
        console.log("Paramtros")
        let user = document.getElementById("user")
        let password = document.getElementById("password")
        console.log(user.value)
        console.log(password.value)
    }
)
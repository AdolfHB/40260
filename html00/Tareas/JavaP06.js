let ejemplo = document.getElementById("app")

const Picture = (id,name) => {
    const url = `https://picsum.photos/id/${id}/200/200`
    return `
    <figure>
    <img src= "${url}" alt="" class = "redonda">
    <figcaption>${name}</figcaption>
    </figure>
    `
};

let x = document.getElementById(`app`).innerHTML = Picture(1, "Mauricio") + Picture(5, "Manuel");

const lista = app.querySelectorAll("img")
console.log(lista)

for (let i = 0; i < lista.length; i++) {
//lista[i].addEventListener("click", saludar)
lista[i].addEventListener("click", () =>{
    lista[i].classList.toggle("redonda")
})
}

function saludar() {
    alert("Hola")
}
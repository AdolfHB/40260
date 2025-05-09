import { y } from "./yM.js"

function x(param){
    y("x")
    console.log("x: " + param)
    return "Fin x"
}

function xx(param){
    return "Fin xx"
}

export {x, xx}
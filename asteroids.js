let jugador = document.getElementById("jugador");
jugador.style.position = "absolute";
jugador.style.top = "400px";
jugador.style.left = "800px";
let posicionJugador 
let distancia = 20; 
let obstaculo = document.getElementById("objeto1")
//movimiento
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
        arriba();
    }
    if (event.key === "ArrowDown") {
        abajo();
    }
    if (event.key === "ArrowLeft") {
        izquierda();
    }
    if (event.key === "ArrowRight") {
        derecha();
    }
    posicionJugador= calcularPosicionJugador()
    posicionObstaculos()
    console.log(posicionJugador)

});

function posicionObstaculos(){

    let cantidadObstaculos=calcularCantidadObstaculos()
    //getBoundingClientRect devuelve dimension y posicion del objeto en el que se aplica 
    let posicionesObstaculos=[]

    //console.log(cantidadObstaculos)
    //BUSCAR LA POSICION DE CADA OBJETo
    for (let i=1; i<=cantidadObstaculos;i++){
        let elemento = document.getElementById('objeto'+i)
        let x = elemento.getBoundingClientRect().x
        let y = elemento.getBoundingClientRect().y
        let posicion ={
            x:x,
            y:y
        }
        //console.log(posicion)
        posicionesObstaculos.push(posicion)
    }
    console.log(posicionesObstaculos)
    





}
function calcularPosicionJugador(){
    let posicionJugador = jugador.getBoundingClientRect();
    let x = posicionJugador.x
    let y = posicionJugador.y
    let z = {
        x:x,y:y
    }
    return z
}
function arriba() {
    let top = parseInt(jugador.style.top); 
    jugador.style.top = (top - distancia) + "px";
}
function abajo() {
    let top = parseInt(jugador.style.top);
    jugador.style.top = (top + distancia) + "px";
}
function izquierda() {
    let left = parseInt(jugador.style.left);
    jugador.style.left = (left - distancia) + "px";
}
function derecha() {
    let left = parseInt(jugador.style.left);
    jugador.style.left = (left + distancia) + "px";
}
function calcularCantidadObstaculos(){
    let x = 0;
    while (document.getElementById(`objeto${x + 1}`)) {
        x++;
    }
    return x

}
/**
 * La posicion de los objetos tiene que actualizarse ahora mismo calcula un objeto extra en la posicion 8 8 ???
 * la popsicion del jugador se calcula simepre que se mueva 
 * tieneen que crearse nuevos objetos cada x tiempo 
 * queda verificar si el objeto colisiona con el jugador 
 * 
 */
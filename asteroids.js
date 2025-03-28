let jugador = document.getElementById("jugador");
jugador.style.position = "absolute";
jugador.style.top = "400px";
jugador.style.left = "800px";
let posicionJugador 
let distancia = 20; 
let obstaculo = document.getElementById("objeto1")
let tiempo =0
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
    //console.log(posicionJugador)

});
setInterval(
    ()=>{
        tiempo+=tiempo+1
    },1000
)

let intervalo =setInterval(
    ()=>{


        //DETECTAR CHOQUE

        //posicionJugador es un array con las 4 esquinas del jugador
        posicionJugador= calcularPosicionJugador()
        //console.log(posicionJugador)
        let posObstaculos = posicionObstaculos()
        //console.log(posObstaculos)
        posObstaculos.forEach(
            (obstaculo)=>{  
                
                posicionJugador.forEach(
                    (esquina)=>{
                        if(esquina.x===obstaculo.x&& esquina.y===obstaculo.y){
                            //console.log("choque")
                            crearElemento("h1","GAME OVER",document.body,"juegoPerdido")
                            crearElemento("h1","GAME OVER",document.body,"juegoPerdido")

                            clearInterval(intervalo)
                        }
                    }
                )


                
            }
        )
    },100
)
function calcularTiempo(){
    
}
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
   // console.log(posicionesObstaculos)
    
    return posicionesObstaculos




}
function calcularPosicionJugador(){
    //modificar la funcion para que tenga 4 posiciones (las 4 esquinas)
    let posicionJugador = jugador.getBoundingClientRect();
    let x = posicionJugador.x
    let y = posicionJugador.y
    //esquina1 es la posicion real del jugador y en base a esta calculare las 4 esquinas del jugador
    let esquina1 = {
        x:x,y:y
    }
    let esquina2={
        x:x+20 , y:y+20
    }
    let esquina3={
        x:x+20 , y:y
    }
    let esquina4={
        x:x , y:y+20
    }

    let posicionTotal=[
    esquina1,esquina2,esquina3,esquina4
    ]
    return posicionTotal
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
function crearElemento(tipo,contenido,padre,id){
    let x = document.createElement(tipo)
    x.innerHTML=contenido
    x.id=id
    padre.appendChild(x)
}
/**
 * La posicion de los objetos tiene que actualizarse ahora mismo calcula un objeto extra en la posicion 8 8 ???
 * la popsicion del jugador se calcula simepre que se mueva 
 * tieneen que crearse nuevos objetos cada x tiempo 
 * queda verificar si el objeto colisiona con el jugador 
 * 
 */
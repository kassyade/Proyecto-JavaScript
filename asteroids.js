
//JUGABILIDAD
let jugador = document.getElementById("jugador");
jugador.style.visibility="hidden"
jugador.style.position = "absolute";
jugador.style.top = "400px";
jugador.style.left = "800px";
let posicionJugador 
let distancia = 20; 
let obstaculo = document.getElementById("objeto1")
let tiempo =0
////////////PUNTOS DE APARICION DE OBSTACULOS 
let diferencia = 10
let puntosDeAparicion = correccionAparicion()

//CAMBIO DE COLOR
let texto = document.getElementById("inicio")
let titulo = document.getElementById("titulo")
let violeta = "#5b4392";
let blanco = "white";
let inicio=setInterval(() => {
    texto.style.color = (texto.style.color === blanco) ? violeta : blanco;
}, 1000);
//CAMBIO AL JUEGO
document.addEventListener("keydown",
    (event)=>{
        //console.log(event)
        if(event.code==="Space"){
            jugador.style.visibility="visible"
            texto.remove()
            titulo.remove()
            clearInterval(inicio)
        }
    }
)








//movimiento del jugador
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

//INFORMACION DEL FIN DE JUEGO (tiempo)
setInterval(
    ()=>{
        tiempo+=tiempo+1
    },1000
)
// MOVIMIENTO Y COLISION CON OBJETOS ?MOVIMIENTO
let intervalo =setInterval(
    ()=>{
        //DETECTAR CHOQUE
        //posicionJugador es un array con las 4 esquinas del jugador
        posicionJugador= calcularPosicionJugador()
        //console.log(posicionJugador)
        let posObstaculos = posicionObstaculos()
        //console.log(posObstaculos)
        
        //CREAR NUEVOS OBJETOS
        let cantidadObstaculos= calcularCantidadObstaculos()

        if(cantidadObstaculos<1){
            let numeroRandom = Math.floor(Math.random() * 4) + 1;
            switch(numeroRandom){
                case 1 :    
                    crearObstaculo(puntosDeAparicion[0])
                break;
                
                case 2 :
                    crearObstaculo(puntosDeAparicion[1])
                break;
                
                case 3 :
                    crearObstaculo(puntosDeAparicion[2])
                break;
                
                case 4 :
                    crearObstaculo(puntosDeAparicion[3])
                break;
                    

            }

        }


        posObstaculos.forEach(
            (obstaculo)=>{  
                
                posicionJugador.forEach(
                    (esquina)=>{
                        if(esquina.x===obstaculo.x&& esquina.y===obstaculo.y){
                            //console.log("choque")
                            crearElemento("h1","!GAME OVER¡",document.body,"juegoPerdido")
                            clearInterval(intervalo)
                        }
                    }
                )


                
            }
        )
    },100
)




//console.log(puntosDeAparicion);






/*
function calcularTiempo(){
}*/
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
function crearObstaculo(ubicacion){
//CADA OBJETO TIENE QUE TENER DIRECCION DEPENDIENDO DEL PUNTO DE CREACION 
    //console.log(ubicacion)
    let numeroObjeto=calcularCantidadObstaculos()+1
    let obstaculo = document.createElement("div")
    obstaculo.id=`objeto${numeroObjeto}`
    //console.log(obstaculo.id)
    obstaculo.style.position = "absolute"; 
    obstaculo.style.color="#ad6464"



    ///UBICACION
    //REDUCCION DE 10 pixeles 
    obstaculo.style.top=(ubicacion.y)+"px"
    obstaculo.style.left=(ubicacion.x)+"px"
    obstaculo.style.height = "10px"; 
    obstaculo.style.width = "10px";
    document.body.appendChild(obstaculo)
    //console.log(obstaculo)
  
    //DIRECCION A LA QUE VA EL OBJETO
    let numeroRandom = Math.floor(Math.random() * 4) + 1;
    switch(numeroRandom){
        case 1 :    
        break;
        
        case 2 :
        break;
        
        case 3 :
        break;
        
        case 4 :
        break;
            

    }





}
function correccionAparicion() {
    let diferencia = 20;

    let anchoCorregido = window.innerWidth - (window.innerWidth % 20);
    let altoCorregido = window.innerHeight - (window.innerHeight % 20);
    
    let puntosDeAparicion = [
        { nombre: "arribaIzquierda", x: 0, y: 0 },
        { nombre: "arribaDerecha", x: Math.floor(anchoCorregido - diferencia), y: 0 },
        { nombre: "abajoIzquierda", x: 0, y: Math.floor(altoCorregido - diferencia) },
        { nombre: "abajoDerecha", x: Math.floor(anchoCorregido - diferencia), y: Math.floor(altoCorregido - diferencia) }
    ];
    

    return puntosDeAparicion
}



/**
 * crear direccion dependiendiendo de donde se crean los obstaculos 
 * 
 */
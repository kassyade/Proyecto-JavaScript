
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
let numeroObstaculos = 6//cantidad de obstaculos en pantalla 
let puntosDeAparicion = correccionAparicion()
let informacionObstaculos = [
]
//console.log(informacionObstaculos)
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
        
        if(cantidadObstaculos<numeroObstaculos){
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

let movimientoObstaculos = setInterval(
    ()=>{
            //console.log(informacionObstaculos)
        informacionObstaculos.forEach(
            (obstaculo)=>{
                //console.log(obstaculo)
                let objeto = document.getElementById(obstaculo.id);

                if (!objeto) return;

                let topActual = parseInt(objeto.style.top) 
                let leftActual = parseInt(objeto.style.left) 
                let distancia=1
            
                if (obstaculo.direccion === "arriba") {
                    objeto.style.top = (topActual - distancia) + "px"
                }
            
                if (obstaculo.direccion === "abajo") {
                    objeto.style.top = (topActual + distancia) + "px"
                }
            
                if (obstaculo.direccion === "izquierda") {
                    objeto.style.left = (leftActual - distancia) + "px"                 }
            
                if (obstaculo.direccion === "derecha") {
                    objeto.style.left = (leftActual + distancia) + "px"
                }


                //borrar si sale de la pantalla
                let rect = objeto.getBoundingClientRect()
                if (rect.top + rect.height < 0 ||  
                    rect.bottom > window.innerHeight ||  
                    rect.left + rect.width < 0 ||  
                    rect.right > window.innerWidth  
                ) {
                    informacionObstaculos = informacionObstaculos.filter(x => x.id !== obstaculo.id)
                    objeto.remove();  
                }

            }
        )





    }
    ,10
)








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
    let posicionTotal=[]
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
    posicionTotal.push(esquina1,esquina2,esquina3,esquina4)
    /////INCOMPLETO
    let borde1
    let borde2
    let borde3
    let borde4
    for (let i = 1; i < 25; i++) {
        posicionTotal.push({ x: x + i, y: y })
    }

    for (let i = 1; i < 25; i++) {
        posicionTotal.push({ x: x + 25, y: y + i })
    }

    for (let i = 25 - 1; i > 0; i--) {
        posicionTotal.push({ x: x + i, y: y + 25 })
    }

    for (let i = 25 - 1; i > 0; i--) {
        posicionTotal.push({ x: x, y: y + i })
    }
    



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
    //AJUSTE DE 20 pixeles 
    obstaculo.style.top=(ubicacion.y)+"px"
    obstaculo.style.left=(ubicacion.x)+"px"
    obstaculo.style.height = "10px"; 
    obstaculo.style.width = "10px";
    document.body.appendChild(obstaculo)
    //console.log(obstaculo)
  
    //DIRECCION A LA QUE VA EL OBJETO
    let direccion = determinarDireccion(ubicacion.nombre)

    //console.log(direccion)


    //INFORMACION DE LOS OBJETOS 
    let info = { id : obstaculo.id , ubicacionInicio: ubicacion.nombre ,direccion:direccion ,x:obstaculo.style.left ,y:obstaculo.style.top }
    informacionObstaculos.push(info)
    //console.log(informacionObstaculos)
    return informacionObstaculos




}
function determinarDireccion (posicionInicial){
    let direccion
    let direccionesPosibles =[
        {dir:"arriba" },
        {dir:"abajo" },
        {dir:"izquierda" },
        {dir:"derecha" }
    ]
    


    if(posicionInicial ==="arribaIzquierda"){
        //console.log(posicionInicial)

        let numeroRandom = Math.floor(Math.random() * 2) + 1;
        switch(numeroRandom){
            case 1 :    
            direccion= direccionesPosibles[1].dir
            break;
            
            case 2 :
                direccion= direccionesPosibles[3].dir
            break;
            

                
    
        }


    }
    if(posicionInicial==="arribaDerecha"){
        let numeroRandom = Math.floor(Math.random() * 2) + 1;
        switch(numeroRandom){
            case 1 :    
            direccion= direccionesPosibles[1].dir
            break;
            
            case 2 :
                direccion= direccionesPosibles[2].dir
            break;
            

                
    
        }
    }
    if(posicionInicial==="abajoIzquierda"){
        let numeroRandom = Math.floor(Math.random() * 2) + 1;
    switch(numeroRandom){
        case 1 : 
        direccion= direccionesPosibles[0].dir   
        break;
        
        case 2 :
            direccion= direccionesPosibles[3].dir
        break;
        

            

    }
    }
    if(posicionInicial==="abajoDerecha"){
        let numeroRandom = Math.floor(Math.random() * 2) + 1;
    switch(numeroRandom){
        case 1 :    
        direccion= direccionesPosibles[0].dir
        break;
        
        case 2 :
            direccion= direccionesPosibles[2].dir
        break;
    
            

    }
    }
    return direccion ; 

}


/**
 * crear direccion dependiendiendo de donde se crean los obstaculos 
 * 
 */
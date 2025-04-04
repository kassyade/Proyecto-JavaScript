# notas

la asignacion de posiciones para la aparicion de objetos esta bien
el problema puede estar en la generación de objetos
PROBLEMA: olvidar usar px cada vez que asignamos la posicion del obstaculo
"error" en la parde de la generacion de obstaculos /logica correcta 
a la hora de crear los objetos si la pantalla tiene una cantidad de px impares (dif a 20) on detectaria el choque con los obstaculos
se puede corregir  usando una funcion que redondee el valor del las esquinas de la pantalla ???-posible solucion

Necesito crear un array que guarde la informacion de todos los obstaculos en este array se tiene que indicar la direccion a la que se mueven 

necesito crear un set interval que segun la informacion del array informacionObstaculos 
mueva a los obstaculos ,el movimiento deberia ser cada ????tiempo?? -500?

Movimiento fluido 1px -10 mm/s
puede que sea necesario tomar todo el borde del jugador para calcular la colision ,no hay problema con el movimietno en diagonal (obstaculos)
crear mas puntos de aparicion ,se puede tomar de referencia los que existen (para no usar la funcion de correccion)
PROBLEMA: demasiadas funciones en el codigo ,puede que sea necesario refactorizar ??crear documentacion para implementar el juego en un portfolio 
añadir informacionn del fin del juego -tiempo -puntuación 
implementar el volver a jugar //puede que funcione un boton que simplemente recargue la página ?

hace falta crear una direccion que apunte hacia el jugador ,existen zonas en las que no dan los obstaculos
//Mi primer archivo en JS
//Mi primer console
console.log("Mi segunda línea en JS mediante buenas prácticas")

//Formas de guardar espacio en memoria
//Primera forma
//Declaramos una variable
var autor
//Si utilizo comillas dobles "" o simples, guardo un string
autor = "Jorge Luis Borges"
console.log(autor)

//Inicializar = declarar y asignar valor
var autor2 = "Isabel Allende";
console.log(autor2)
var precioAllende = 3000
console.log(precioAllende)
//Segunda forma
//Tipo number: número sin comillas
let precio = 2100
console.log(precio)
//Diferencia scope (ver en la clase 4), en cómun variables --> espacios en memoria que puedo reasignar su valor

//re asignamos un valor
precioAllende = 5000
console.log(precioAllende)

//Utilizar LET que es buena práctica, var es mala práctica

//tercera forma 
//const viene de constante:
const mascota = "Elisa"
console.log(mascota)
//No puede reasignar
//da error: mascota = "Duki"
const PI = 3.14

//Case sensitive: diferencia entre MINS y MAYS
// console.log(PRECIO)

//Concatenar trabajar con strings
let espacio = " " 
console.log(autor2 +espacio+ precioAllende)
let mensajeAllende = 'La autora es ' + autor2 + " y el precio de su libro es " +precioAllende
console.log(mensajeAllende)

//Backticks equivalente, pero más practica -- otra forma concatenar
console.log(`La autora es ${autor2} y el precio de su libro es ${precioAllende} escrito con backticks`)

//operaciones de aritmetica básicas: + - / *
let numero1 = 9
let numero2 = 5

let suma = numero1 + numero2
console.log(suma)
let resta = numero1 - numero2
console.log("La resta da " + resta)
let multiplicacion = numero1 * numero2
console.log(`La multiplicación es ${multiplicacion}`)

//Not a number = NaN Documentación: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/NaN

// //PROMPT-- ingresar mediante cartel emergente
// let nombreIngresado = prompt("Por favor, ingrese su nombre")
// console.log("El nombre ingresado es " +nombreIngresado)

// //ALERT -- mostrar mediante cartel emergente

// alert("Bienvenidos a Coder House")

// alert(`tu nombre es ${nombreIngresado} ${precio}`)
//Por defecto un prompt guarda un string
// let numeroA = prompt("Ingrese primer num")
// let numeroB = prompt("Ingrese segundo num")
// //Not a number = NaN - / y en algunos de los términos tenemos un string. 
// console.log(numeroA * numeroB)
let numeroC = "8"
console.log(numeroC)
//parse convertir tipo de dato a numérico
console.log(parseInt(numeroC))
//convertir tipo numérico a string
console.log(precioAllende.toString())


//Practicar -- DESAFIO sin entrega

//Realizar un pequeño simulador que replique un proceso conocido:
//Calcular promedio de gol de un jugador(usuario ingresa, cantidad de Goles y cantidad de partidos). Nosotros le mostramos el promedio de gol

//ingrese tres notas el usuario y sacar el promedio

let partidosJugados = "130"
let cantidadGoles = "200"

let division = cantidadGoles / partidosJugados
console.log(`El promedio de goles por partidos es de ${division}`)

let a = prompt ("Ingrese cantidad de goles")
let b = prompt ("Ingrese cantidad de partidos jugados")
console.log(a / b)

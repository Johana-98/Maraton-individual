// Ejercico 1
// Pedir nombre al usuario y saludarlo. Pasar el texto a Mayusculas y a Minusculas. Mostrar ambos en pantalla.
/* 
let nombre=prompt("Ingrese nombre");
let saludo='Hola '+nombre;
alert(saludo);

// en MAYUSCULAS 
saludo = saludo.toUpperCase();
document.write(saludo;

// en minusculas 
saludo = saludo.toLowerCase();
document.write(saludo);
 */
//Ejercicio 2
//Pedir al usuario dos numeros y mostrar la suma y resta de ellos. 
//Para la resta, restar siempre al más grande el mas chico. 
//suma
/* let primerNum = prompt("Ingrese el primer número: ");
let segundoNum = prompt("Ingrese el segundo número: ");
let resultado1 = parseInt(primerNum) + parseInt(segundoNum);
alert("La suma de tus número es: " + resultado1);

//resta

if (parseInt(primerNum) > parseInt(segundoNum)){
    let resultado2 = parseInt(primerNum) - parseInt(segundoNum);
    alert("La resta de tus números es: " + resultado2);
} else{
    let resultado2 = parseInt(segundoNum) - parseInt(primerNum);
    alert("La resta de tus números es: " + resultado2);
}
 */
//Ejercicio 3
// Ingresar un texto. Preguntar si quiere el resultado en pantalla (alert) o consola (console.log). 
//pasar el texto a MAYUSCULA y mostrar donde corresponda
/* let texto = prompt("Ingrese un texto: ");
let pregunta1 = window.confirm("¿Desea el resultado por pantalla?");
let pregunta2 = window.confirm("¿Desea el resultado por consola");

if (pregunta1 == true){
    texto = texto.toUpperCase();
    alert(texto)
} else if (pregunta2 == true){
    texto = texto.toUpperCase();
    console.log = texto;
}  */

//Ejercicio 4
// Calculadora. Pedir ingresar dos numeros. Luego ingresar una operación
//(SUMA/RESTA/MULTI/DIV/POTENCIA). Realizar la operación y mostrar el resultado en pantalla.
/* let primerNumero = prompt("Ingrese primer numero: ");
let segundoNumero = prompt("Ingrese segundo número: ");
let operacion = prompt("Ingrese la operación que desee realizar (+, -, *, /, **(potencia))");

switch(operacion){
    case "+":
        let resultado1 = parseInt(primerNumero) + parseInt(segundoNumero);
        alert("Tu suma es: " + resultado1);
        break;
    case "-":
        let resultado2 = parseInt(primerNumero) - parseInt(segundoNumero);
        alert("Tu resta es: " + resultado2);
        break;
    case "*":
        let resultado3 = parseInt(primerNumero) * parseInt(segundoNumero);
        alert("Tu multiplicación es: " + resultado3);
        break;
    case "/":
        let resultado4 = parseInt(primerNumero) / parseInt(segundoNumero);
        alert("Tudivición es: " + resultado4);
        break;
    case "**":
        let resultado5 = parseInt(primerNumero) ** 2;
        let resultado6 = parseInt(segundoNumero) ** 2;
        alert("Tus numero elevados en potencia son: " + resultado5 + " y " + resultado6);
        break;
    default:
        alert("Solo son validos los símbolos mencionados");
        break;
}
 */

//EJERCICIO 5
/* Vamos a reutilizar la calduladora del punto 4. Pero esta vez, luego de mostrar el resultado, 
vamos a preguntar al usuario si desea hacer otra operación o terminar. Si quiere seguir operando, 
volvemos a pedir valores, operación y mostrar resultado HASTA que nos diga que no quiere continuar.
Extra: investigar/googlear la función de JavaScript "confirm" */

/* do{
let primerNumero = prompt("Ingrese primer numero: ");
let segundoNumero = prompt("Ingrese segundo número: ");
let operacion = prompt("Ingrese la operación que desee realizar (+, -, *, /, **(potencia))");

switch(operacion){
    case "+":
        let resultado1 = parseInt(primerNumero) + parseInt(segundoNumero);
        alert("Tu suma es: " + resultado1);
        break;
    case "-":
        let resultado2 = parseInt(primerNumero) - parseInt(segundoNumero);
        alert("Tu resta es: " + resultado2);
        break;
    case "*":
        let resultado3 = parseInt(primerNumero) * parseInt(segundoNumero);
        alert("Tu multiplicación es: " + resultado3);
        break;
    case "/":
        let resultado4 = parseInt(primerNumero) / parseInt(segundoNumero);
        alert("Tudivición es: " + resultado4);
        break;
    case "**":
        let resultado5 = parseInt(primerNumero) ** 2;
        let resultado6 = parseInt(segundoNumero) ** 2;
        alert("Tus numero elevados en potencia son: " + resultado5 + " y " + resultado6);
        break;
    default:
        alert("Solo son validos los símbolos mencionados");
        break;
    }

deNuevo = window.confirm("¿Desea volver a realizar otra operación?");
} while (deNuevo == true);
 */
/* EJERCICIO 6
Agregar alumnos/as a un curso. Vamos a pedirle al usuario que ingrese nombres de 
alumnos/as para el nuevo curso. Continuar guardando nombres HASTA que el usuario
ingrese SALIR. Mostrar todos los nombres en pantalla. 
*/
/* alert("¡Bienvenido a este nuevo curso!");
const nuevosAlumnos = [];

do {
    let alumnos = prompt("Ingrese alumnos nuevos para inscripción al nuvo curso: ");
    nuevosAlumnos.push(alumnos);
    aviso = confirm("¿Aún falta ingresar mas alumnos?");

}  while (aviso == true);

alert(nuevosAlumnos); */


/*EJERCICIO 7
Dado el siguiente array de nombres, recorrerlo y mostrar en pantalla: Indice (posición)
y Nombres con la primera letra en mayuscula.
*/
 /* const ej7Nombres = ["goku", "mario", "melchor", "mafalda", "cacho", "hermione", "tony", "pappo", "leia", "homero"];
let i = 0;
    for (let i = 0; i < ej7Nombres.length; i++) {
        let indice = i;
        nombres1 = (ej7Nombres[i])
        nombres2 = nombres1[0].toUpperCase() + nombres1.slice(1);
        
        alert(indice + " " + nombres2);     
    } */


 /*EJERCICIO 8
 Para una veterinaria. Dado el siguiente array de nombres de mascotas completar
 el código con las siguientes reglas de negocio:
 - Si el nombre tiene mas de 6 caracteristicas, informar. "nombre largo"
 - Si tiene menos o es igual a 3 caracteres, informar. "nombre corto"
 - Si es igual a "Fido" o "Gertrudis", informar. "Hay que vacunar contra la rabia"
 - Si es igual a "Tuerca", informar. "entregar alimento balanceado"
 */

/* const ej8Mascotas = ["Tuerca", "Ramshanaram", "Perro", "Gertrudis", "Kat", "Fido", "Lo", "Loko", "MAX"];
let mascotas = prompt("¿Cual es el nombre de su mascota?"+" Tuerca, Ramsharam, Perro, Gertrudis, Kat, Fido, Lo, Loko, MAX");

if(mascotas == ej8Mascotas[5] || mascotas == ej8Mascotas[3]){
    alert(mascotas + " tiene que vacunarse contra la rabia");
} else if(mascotas.length<=3){
    alert(mascotas + " tiene un nombre corto");
}else if(mascotas.length>6){
    alert(mascotas + " tiene un nombre largo");
}else if(mascotas == ej8Mascotas[0]){
    alert(mascotas + " tiene que recibir alimento balanceado")
}
 */

/* EJERCICIO 9
Un restaurante desea mejorar su sistema de reserva para mostrar a los clientes un
aproximado de costos.
- Cada menor de edad pagará el menú $450 y cada adulto, $700.
- Si el grupo tiene más de 4 adultos, se hará un 10% al total de la factura.
Mostrar por pantalla la cantidad de comensales y el costo total a pagar.
*/
/* const ej9restaurant = [25,17,18,44,12,9,36,50]

let i = 0;
let menores = 0;
let mayores = 0;
let clientes = ej9restaurant.length;

for (i=0; i < clientes; i++){
     console.log(ej9restaurant[i])
     if ((ej9restaurant[i])<18){
         menores++;
     } else{
         mayores++;
     }
}
let cuenta = mayores*700 + menores*450;
 if (mayores>4) {
     cuenta = cuenta - (cuenta*0.10);
}

alert("Por ser mas de 4 adultos le hacemos un descuento del 10%, su cuenta total para "+ menores + " menores y " + mayores + " adultos es de: $"+ cuenta);
 */
/*EJERCICIO 10
De un consultorio médico nos piden automatizar el proceso de recepción de los
pacientes.
Para ello:
- Ingresar código de paciente (Number XXX, 3 dígitos de 1 a 999).
- Si el código ingresado esta entre 1 y 99, es un paciente VIP.
- Preguntarles "Como valoran la calidad del servicio? (1..10)". Guardar el
resultado ingresado.
- Agregar el código de paciente adelante en la cola (array) de turnos
- Si el código ingresado esta entre 100 y 500, es un paciente de prepaga.
- Agregar el código de paciente al final de la cola (array) de turnos
- Si el código ingresado esta entre 501 y 999, es un paciente nuevo.
- Preguntarles "Desea pasarse a VIP?". Si la respuesta es afirmativa, guardar el
código de paciente.
- Agregar el código de paciente al final de la cola (array) de turnos
- Si todos los pacientes fueron ingresados, informar en pantalla:
- Calidad del servicio VIP. Informar valor promedio, valor máximo y valor mínimo.
- Ingreso al consultorio: Mostrar en pantalla el orden de ingreso x código de
paciente.
- Pasarse a VIP: Mostrar en pantalla todos los códigos de pacientes que desean
ser VIP
- Nota: Escribir código con funciones para facilitar su lectura.
*/



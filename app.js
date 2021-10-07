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

//Ejercicio 5
//Vamos a reutilizar la calduladora del punto 4. Pero esta vez, luego de mostrar el resultado, vamos a preguntar al usuario si desea hacer otra operación o terminar. Si quiere seguir operando, volvemos a pedir valores, opera


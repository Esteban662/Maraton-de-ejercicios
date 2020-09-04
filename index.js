/*
Bienvenido/a!!

Te proponemos 10 ejercicios de JS para resolver de forma individual. Si te trabas con alguno, podes continuar con otro de forma independiente. Si corresponde el ejercicio tiene un <div> asignado en el HTML para visualizar el resultado. Algunos te piden solo tocar JS otros, JS + HTML.

Exitos! Happy coding! - Guayerd
*/

/*
Ej - 1: Mostrar con alert el siguiente texto... "Bievenidas/os al Maratón Guayerd"
*/

alert("Bienvenidas/os al Maratón Guayerd")  

/*
Ej - 2: Completar/arreglar el código para que la función focusHandler() se ejecute cuando el foco este puesto en el input.ej2-nombre. Y cuando el foco se pierda (evento blur), borrar el contenido del div.
*/
const ej2Nombre = document.querySelector("input.ej2-nombre");
const ej2Resultado = document.querySelector(".ej2-resultado"); //Se rompe lindo, no?
ej2Nombre.addEventListener("focus", focusHandler);
ej2Nombre.addEventListener("blur", blurHandler)
function focusHandler(e){
  ej2Resultado.innerText = "El input nombre tiene el foco";
}

function blurHandler(e){
  ej2Resultado.innerText = "";
}

/*
Ej - 3: Codear la función mostrarSaludo() para mostrar un saludo desde el div.ej3
*/

const ej3Div = document.querySelector(".ej3-resultado");

function mostrarSaludo(saludo, div){
  div.innerText = saludo
}

const txtSaludo = "Arranquemos la maratón de código Guayerd! Starting at..." + (new Date()).toLocaleString();
mostrarSaludo(txtSaludo, ej3Div);


/*
Ej - 4: Cuando el usuario haga "click" sobre el botón button.ej4-enviar:
  a) Leer los campos ej4-email, ej4-mensaje
  b) Mostrar el valor de esos campos en div.ej4-resultado
  c) Limpiar los campos asignando "" a los mismos
*/
//Posicionar
let emailEj4 = document.querySelector(".ej4-email")
let mensajeEj4 = document.querySelector(".ej4-mensaje")
let enviarEj4 = document.querySelector(".ej4-enviar")
let resultadoEj4 = document.querySelector(".ej4-resultado")

//Evento
enviarEj4.addEventListener("click", enviarEj4Handler)

//Funciones
function enviarEj4Handler(){
  resultadoEj4.innerText = `Email: ${emailEj4.value}  Mensaje: ${mensajeEj4.value}`
  emailEj4.value = ""
  mensajeEj4.value = ""
}

/*
Ej - 5: Crear un div con 2 inputs y un boton "Sumar"
  a) Cuando se clickea en "sumar", sumar ambos valores de inputs y mostrar el resultado en el div.ej5-resultado
  b) Si alguno de los valores ingresados no es numérico (isNaN) informar en div.ej5-resultado "Ingreso erróneo"
*/

let valeInput = document.querySelector(".valeInputs")
valeInput.innerHTML = `<input class= "numero1"  placeholder="Ingrese un numero"></input>
<input class= "numero2"  placeholder="Ingrese un numero"></input>
<button class= "sumaEj5">Sumar</button>`
let numero1 = document.querySelector(".numero1")
let numero2 = document.querySelector(".numero2")
let sumaEj5 = document.querySelector(".sumaEj5")
let resultadoEj5 = document.querySelector("div.ej5-resultado")


sumaEj5.addEventListener("click", sumarEj5)

function sumarEj5(){
  resultadoEj5.innerText= ""  
  if(isNaN(numero1.value || isNaN(numero2.value))){
    resultadoEj5.innerText+= `Ingreso erroneo`
  }else{
    resultadoEj5.innerText+= `Resultado: ${parseInt(numero1.value) + parseInt(numero2.value)}` 
  }
}


/*
Ej - 6: Completar los elementos <select> del div.ej6 con los arrays correspondientes. Recorrerlos y crear los <option> según corresponda
*/
const paises = ["Argentina","Bolivia","Brasil","Chile","Colombia","Ecuador","Paraguay","Perú","Uruguay","Venezuela"];
const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
//Posicionamiento
let selectPaises =  document.querySelector("select.ej6-paises")
let selectDias = document.querySelector("select.ej6-diasSemana")
cargarPaises(selectPaises)
cargarDias(selectDias)
//Funciones
function cargarPaises(pais){
  for(let i = 0; i<paises.length;i++){
    const optionPaises = document.createElement("option")
    optionPaises.value = paises[i]
    optionPaises.innerText = paises[i]
    pais.appendChild(optionPaises)
  }
}
function cargarDias(dia){
  for(let i = 0;i<diasSemana.length;i++){
    const optionDias = document.createElement("option")
    optionDias.value = diasSemana[i]
    optionDias.innerText = diasSemana[i]
    dia.appendChild(optionDias)
  }
}



/*
Ej - 7: Dado el siguiente array, mostrar en el div.ej7-resultado el valor del select cuando el usuario selecciona un valor
*/
const momento = ["Mañana","Tarde","Noche"];

let momentoSelect = document.querySelector("select.momentos")
let ej7Resultado = document.querySelector("div.ej7-resultado")

momentoSelect.addEventListener("click",mostrarMomento)

cargarMomento(momentoSelect)
//mostrarMomento()
function cargarMomento(momentos){
  for(let i = 0; i<momento.length;i++){
    const optionMoment = document.createElement("option")
    optionMoment.value= momento[i]
    optionMoment.innerText= momento[i]
    momentos.appendChild(optionMoment)
  }
}
function mostrarMomento(){
  ej7Resultado.textContent = momentoSelect.value
 }

/*
Ej - 8: Validar un ingreso de usuario al sistema utilizando localStorage. Mostrar en div.ej8-resultado "OK" o "Error".
  El form esta creado en el div.ej8
*/
localStorage.setItem("password","js2020"); //Este es el password que deben comparar con el ingreso del usuario

let passwordEj8 = document.querySelector("#password")
let ingresar = document.querySelector(".ingresarPassword")
let ej8Resultado = document.querySelector(".ej8-resultado")

ingresar.addEventListener("click", verifPassword)

function verifPassword(){
  if(passwordEj8.value !== localStorage.getItem("password")){
    ej8Resultado.textContent = "Error"
  }else{
    ej8Resultado.textContent= "Ok"
    passwordEj8.value = ""
  }
}




/*
Ej - 9: Mostrar en el div.ej9-resultado el listado de usuarios que se encuentra en el array utilizando la siguiente plantilla:

<div class="usuario-contenedor">
  <div class="fila1">
    <span class="title">Nombre:</span><span>valor</span>
    <span class="title">NroCliente:</span><span>valor</span>
  </div>
  <div class="fila2">
    <span class="title">DNI:</span><span>valor</span>
    <span class="title">Fecha Nacimiento:</span><span>valor</span>
  </div>
</div>

*/

const usuarios = [
  {
    nombre: "Juan Perez",
    nroCliente: 1001,
    dni: 88888888,
    fechaNacimiento: "10/10/1988"
  },
  {
    nombre: "Ana Martinez",
    nroCliente: 1010,
    dni: 88888886,
    fechaNacimiento: "10/10/1990"
  },
  {
    nombre: "Susana Gomez",
    nroCliente: 1021,
    dni: 88888889,
    fechaNacimiento: "10/10/1985"
  },
];

let divEj9 = document.querySelector("div.ej9-resultado")
usuarios.forEach(function(usuario){

  divEj9.innerHTML+= `<div class="usuario-contenedor">
  <div class="fila1">
    <span class="title">Nombre: </span><span>${usuario.nombre}</span>
    <span class="title">NroCliente: </span><span>${usuario.nroCliente}</span>
  </div>
  <div class="fila2">
    <span class="title">DNI: </span><span>${usuario.dni}</span>
    <span class="title">Fecha Nacimiento: </span><span>${usuario.fechaNacimiento}</span>
  </div>
  </div>`
})

/*
Ej - 10: Nuestro cliente es una empresa de marketing que busca generar una base de datos de contactos para poder vender productos. Debemos crear para ellos un formulario de carga con los siguientes datos:

  - Nombre
  - Email
  - Teléfono
  - Horario de contacto (Mañana/Tarde/Noche)
  - Producto (Crédito/Celular/Viajes/Seguros)
  - Botón "Guardar"
  - Botón "Finalizar"

  a) Crear el <form> dentro del elemento div.ej10-form
  b) Crear los elementos input, select, button que correspondan
  c) Cuando el usuario hace "click" en el botón, guardar los datos de contacto en un array
  d) Limpiar los elementos del form
  e) Cada vez que se guarden datos, guardarlos tambien en localStorage
  f) Cuando la página se vuelve a cargar, recuperar el array desde localStorage si es que existe.
  e) Cuando se hace click en "Finalizar", mostrar de forma clara el listado de contactos y sus datos dentro de div.ej10-resultado y limpiar el localStorage.

  Bonus!!
  1) Validar los datos según el tipo.
  2) Todos los datos son requeridos. Evitar cargar datos vacios.
  3) Evitar cargar datos si el email ya existe en el array de contactos.
  4) En todos los casos, informar de forma clara al usuario si hay problemas de validación de datos.
*/

let formEj10 = document.querySelector("div.ej10-form")

formEj10.innerHTML = `<input type="text" class="ej10-nombre" placeholder="Ingrese su nombre" ><br><br>
<input type="text" class="ej10-email" placeholder="Ingrese su email"><br><br>
<input class="ej10-telefono" placeholder="Ingrese su número de telefono"><br><br>
<select name="horario" id="ej10-horario">
    <option value="null">Horario de contacto</option>
    <option value="mañana">Mañana</option>
    <option value="tarde">Tarde</option>
    <option value="noche">Noche</option>
</select><br><br>
<select name="producto" id="ej10-producto">
    <option value="null">Producto</option>
    <option value="credito">Credito</option>
    <option value="celular">Celular</option>
    <option value="viajes">Viajes</option>
    <option value="seguros">Seguros</option>
</select><br><br>
<button class="ej10-guardar">Guardar</button><br><br>
<button class="ej10-finalizar">Finalizar</button>`


let nombreEj10 = document.querySelector(".ej10-nombre")
let emailEj10 = document.querySelector(".ej10-email")
let telefonoEj10 = document.querySelector(".ej10-telefono")
let horarioEj10 = document.querySelector("#ej10-horario")
let productoEj10 = document.querySelector("#ej10-producto")
let guardarEj10 = document.querySelector(".ej10-guardar")
let finalizarEj10 = document.querySelector(".ej10-finalizar")
let divResultadoEj10 = document.querySelector("div.ej10-resultado")
let arrEj10 = []
let usuariosEj10 = localStorage.getItem("usuarios")
let validNombreEj10 = document.querySelector(".validNombreEj10")
let validEmailEj10 = document.querySelector(".validEmailEj10")
let validNumberEj10 = document.querySelector(".validNumberEj10")
let validHorarioEj10 = document.querySelector(".validHorarioEj10")
let validProductoEj10 = document.querySelector(".validProductoEj10")


guardarEj10.addEventListener("click", guardarArr)
recuperarArray()
finalizarEj10.addEventListener("click", finalEj10)


function guardarArr(){
    arrEj10 = [`Nombre: ${nombreEj10.value}` , `Email: ${emailEj10.value}`, `Telefono ${telefonoEj10.value}`, `Horario: ${horarioEj10.value}`, `Producto: ${productoEj10.value}`]
    console.log(arrEj10)
    localStorage.setItem("usuarios",JSON.stringify(arrEj10))
    nombreEj10.value = ""
    emailEj10.value = ""
    telefonoEj10.value = ""
    productoEj10.value = null
    horarioEj10.value = null
   
}

function recuperarArray(){
  if (localStorage.getItem("usuarios")){
    arrUsuarios =  JSON.parse(usuariosEj10)
    console.log(arrUsuarios)
  }
}

function finalEj10(){
  arrUsuario = JSON.parse(usuariosEj10)
  divResultadoEj10.innerText = `${arrUsuario[0]}
  ${arrUsuario[1]}
  ${arrUsuario[2]}
  ${arrUsuario[3]}
  ${arrUsuario[4]}`
  localStorage.removeItem("usuarios")
}

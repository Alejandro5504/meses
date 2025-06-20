// da igual que sea un select o que sea un label siempre que sea una etiqueta con opciones a escoger para tener el valor de la opcion escogida, tiene que usarse un ID en la etiqueta raiz



const meses = [ //array de objetos que contiene la información a mostrar
  {
    nombreMes: "Enero", // nombreMes = atributo
    dias: 31,
    trimestre: 1,
    estacion: "invierno",
    enCatalan: "gener",
    enIngles: "january",
    enFrances: "janvier",
  },
  {
    nombreMes: "Febrero",
    dias: 28, // o 29 en año bisiesto
    trimestre: 1,
    estacion: "invierno",
    enCatalan: "febrer",
    enIngles: "february",
    enFrances: "février",
  },
  {
    nombreMes: "Marzo",
    dias: 31,
    trimestre: 1,
    estacion: "primavera",
    enCatalan: "març",
    enIngles: "march",
    enFrances: "mars",
  },
  {
    nombreMes: "Abril",
    dias: 30,
    trimestre: 2,
    estacion: "primavera",
    enCatalan: "abril",
    enIngles: "april",
    enFrances: "avril",
  },
  {
    nombreMes: "Mayo",
    dias: 31,
    trimestre: 2,
    estacion: "primavera",
    enCatalan: "maig",
    enIngles: "may",
    enFrances: "mai",
  },
  {
    nombreMes: "Junio",
    dias: 30,
    trimestre: 2,
    estacion: "verano",
    enCatalan: "juny",
    enIngles: "june",
    enFrances: "juin",
  },
  {
    nombreMes: "Julio",
    dias: 31,
    trimestre: 3,
    estacion: "verano",
    enCatalan: "juliol",
    enIngles: "july",
    enFrances: "juillet",
  },
  {
    nombreMes: "Agosto",
    dias: 31,
    trimestre: 3,
    estacion: "verano",
    enCatalan: "agost",
    enIngles: "august",
    enFrances: "août",
  },
  { //objeto   //contenido
    nombreMes: "Septiembre",
    dias: 30,
    trimestre: 3,
    estacion: "otoño",
    enCatalan: "setembre",
    enIngles: "september",
    enFrances: "septembre",
  },
  {
    nombreMes: "Octubre",
    dias: 31,
    trimestre: 4,
    estacion: "otoño",
    enCatalan: "octubre",
    enIngles: "october",
    enFrances: "octobre",
  },
  {
    nombreMes: "Noviembre",
    dias: 30,
    trimestre: 4,
    estacion: "otoño",
    enCatalan: "novembre",
    enIngles: "november",
    enFrances: "novembre",
  },
  {
    nombreMes: "Diciembre",
    dias: 31,
    trimestre: 4,
    estacion: "invierno",
    enCatalan: "desembre",
    enIngles: "december",
    enFrances: "décembre",
  },
];

const MES = document.getElementById("m1");




function mostrar() {

  let mes = Number(MES.value);
  let seleccionado = mes;

  if (!seleccionado) {
    alert("Mes no válido.");
    
  }

  document.getElementById("dias").innerHTML = "Tiene " + meses[seleccionado].dias + "días";
  document.getElementById("trimestre").innerHTML = "Está en el trimestre" + meses[seleccionado].trimestre;
  document.getElementById("estacion").innerHTML = "Estación: " + meses[seleccionado].estacion;
  document.getElementById("catalan").innerHTML = "En catalán: " + meses[seleccionado].enCatalan;
  document.getElementById("ingles").innerHTML = "En inglés: " + meses[seleccionado].enIngles;
  document.getElementById("frances").innerHTML = "En francés: " + meses[seleccionado].enFrances;
}
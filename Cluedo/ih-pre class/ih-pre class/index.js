//---------------------------
// ARRAYS
//---------------------------

let myArray = ["🍅","🧁","🥕","🥑"];
let coco = "🥥";
console.log("myArray",myArray.length)
console.log("myArray",myArray[2])
myArray.push(coco)
console.log("myArray",myArray)


//---------------------------
// DOM MANIPULATION
//---------------------------
// querySelector pasando clase
let xxx = document.querySelector('.hola')
console.log("xxx",xxx.textContent)

// querySelector pasando tag
let zzz = document.querySelector("h3")
console.log("zzz",zzz.textContent)

// querySelector pasando Id
let ccc = document.querySelector('#myFood')
console.log("ccc",ccc.textContent)


// getElementById
let aaa = document.getElementById('myFood')
console.log("aaa",aaa.textContent)
// padre hijo


//---------------------------
// atributos
let qqq = document.querySelector('h4').getAttribute('data-paco')
console.log("qqq", qqq)

let eee = document.getElementById('ponmeAtributos')
eee.setAttribute('data-algo','lo que sea')

//---------------------------
// src
let url = document.querySelector("img")
console.log("img", url.src)
let newElementSrc = "/imgs/peaches.jpg"
url.src = newElementSrc;
//---------------------------
// style
let rrr = document.querySelector('h4')
rrr.style.background="red"
//---------------------------
// document.querySelectorAll("")
let allElementsHola = document.querySelectorAll('.hola')
console.log("allElementsHola",allElementsHola)

let segundoElementoHola = allElementsHola[1]
console.log("segundoElementoHola",segundoElementoHola)
//---------------------------
// FOR EACH
// syntaxis:
// allElements.forEach( el => { 
//     dosomething()
// }) 
allElementsHola.forEach( frase => {
    console.log(frase.textContent)
})



//---------------------------
// ON CLICK se pone en el HTML : 
// syntaxis: 
// onclick="nombreDeLaFuncion()
//---------------------------



let hijo = document.querySelector("#padre .target")
console.log("hijo",hijo)
//---------------------------
// EVENT LISTENER 'click'
// syntaxis
// element.addEventListener('click', function (){
//     nombreDeLaFuncion()
// })

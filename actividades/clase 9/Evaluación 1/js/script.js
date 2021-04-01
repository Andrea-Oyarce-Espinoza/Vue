"use strict"

let app = new Vue({
  el: '#app',
  data: {
      //Arreglo de imagenes
        aliens: [
        {
            imagen: "js/alien-kawaiii.png" //primera imagen
        },
        {
            imagen: "js/alien-kawaii2.png"//segunda imagen
        },
        {
            imagen: "js/cutealien.png"//tercera imagen
        },
        {
            imagen: "js/alien-fighter.png"//cuarta imagen
        },
        {
            imagen: "js/alien-kawaii6.jpg"//quinta imagen
        }

    ],
    seleccionados:[]//Las imágenes son llamadas según su orden y el punto de checkbox, sin embargo, cada vez que se suprima una de estas y se vuelva a llamar, aparecerá al final del arreglo. 
  }
})
"use strict";
//let numero1 = 100
new Vue({
    el: "#app",
    data: {
        numero1: 0,
        numero2: 0,
        resultado: ""
    },
    methods {
        sumar() {
            console.log("SUMAR")
            this.resultado = this.numero1 + this.numero2;
        },
        procesarSubmit(evento) {
            console.log("SUBMIT")
            evento.preventDefault()
        }
    }
})
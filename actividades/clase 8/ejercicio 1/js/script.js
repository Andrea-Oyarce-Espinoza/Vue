"use strict";

let app = new Vue({
    el:"#app",
    data: {
        simple: "",
        numero_1: 0,
        numero_2: 0,
        resultado: 0
    },
    methods: {
        clic(){
            if(this.simple=="suma") {
                this.resultado = this.numero_1 + this.numero_2;
            } else {
                this.resultado = this.numero_1 - this.numero_2;
            }
        }
    }
})
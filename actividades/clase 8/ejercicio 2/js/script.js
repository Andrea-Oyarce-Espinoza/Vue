"use strict";

let app = new Vue({
    el  :"#app",
    data: {
        simple : "",
        img_1  : "",
        img_2  : "",
        alien_1: "El primer alien",
        alien_2: "Alien volando",
        alien_3: "Alien viajero"
    },
    methods: {
        mostrar(){
            if( this.simple == "img_1") {
                this.imagen =  this.alien_1 
            }
            if else {
                this.alien_2
            }
            if else {
                this.alien_3
            }
        }
    }
})
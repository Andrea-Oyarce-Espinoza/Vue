"use strict";

let app = new Vue({
    el: "#app", //Este artributo 'el' es OBLIGATORIO
    data: { //Esta sección se llama MODELO
    lista: [
        {
            nombre: "Gambito",
            apellido: "Correa"
        },
        {
            nombre: "Josefina",
            apellido: "Gamboa"
        },
        {
            nombre: "Claudio",
            apellido: "Ruiz"
        }
    ], 
    nuevonombre: "",
    nuevoapellido: "",
    indiceedicion: -1
    },
    methods: { //Esta sección se llama métodos
       guardar() {
           if (this.indiceedicion == -1) {
               this.lista.push({
                   nombre: this.nuevonombre,
                   apellido: this.nuevoapellido
               })
           } else {
               this.lista[this.indiceedicion].nombre = this.nuevonombre;
               this.lista[this.indiceedicion].apellido = this.nuevoapellido;
               this.indiceedicion = -1;
           }
           this.nuevonombre = "";
           this.nuevoapellido = "";
       },
       editar(indice) {
           this.indiceedicion = indice;
           this.nuevonombre = this.lista[indice].nombre;
           this.nuevoapellido = this.lista[indice].apellido;
       }
    }
});
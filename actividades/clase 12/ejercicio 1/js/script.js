"use strict";

Vue.component('pingponginterno', {
    template: "#pingponginterno",
    data() {
        return {
            elegido: 1
        };
    },
    methods: {
        mostrarOtro() {
            this.elegido = this.elegido == 1 ? 2 : 1;
        }
    }
})

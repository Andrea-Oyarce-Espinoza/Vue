"use strict";

let app = new Vue({
    el: "#app",
    data: {
        lenguajes: [
            {
                nombre: "VueJS",
                descripcion: "Framework creado desde AngularJS",
                logo: "https://es.vuejs.org/images/logo.png"
            },
            {
                nombre: "Angular5",
                descripcion: "Framework sucesor de AngularJS",
                logo: "angular5logo.png"
            },
            {
                nombre: "React",
                descripcion: "Framework creado por Facebook",
                logo: ""
            }
        ],
        seleccionados:[]
    }
})
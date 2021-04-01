"use strict";

new Vue({
    el: "#app",
    data: {
        saludo: "Saludos terricolas!",
        fotoelegida: "",
        alien:"https://i.pinimg.com/564x/bc/a1/a2/bca1a280ce1f29e26c62f29e8edb508d.jpg",
        fotos: [
            {
                url: "https://i.imgur.com/4KqbW6w.jpg",
                titulo: "Alien de mirada fija"
            },
            {
                url: "https://pbs.twimg.com/profile_images/458443730647654403/tuCr75Ay_400x400.jpeg",
                titulo: "Alien viajero"
            }
        ]
    },
    methods: {

    }
})
"use strict";

Vue.component("pelota", {
    template: /*html*/`
        <div class="pelota" :style="{top: configuracion.y + 'px', left: configuracion.x + 'px'}" @click="mover()">
            <img :src="configuracion.urlimagen">
        </div>
    `,
    data() {
        return {

        };
    },
    methods: {
        mover() {
            this.configuracion.x += this.configuracion.dx;
            this.configuracion.y += this.configuracion.dy;
            if (this.configuracion.x > this.maxX || this.configuracion.x < 0) {
                this.configuracion.dx *= -1;
            }
            if (this.configuracion.y > this.maxY || this.configuracion.y < 0) {
                this.configuracion.dy *= -1;
            }
        }
    },
    props: ["configuracion", "maxX", "maxY"]
})


let app = new Vue({
    el: "#app",
    data: {
        pelotas: [
            {
                key: 1,
                urlimagen: "./img/pelota_dragon.png",
                x : 100,
                y :  50,
                dx:   1,
                dy:   1
            },
            {
                key: 2,
                urlimagen: "./img/pelota_dragon.png",
                x : 50,
                y : 70,
                dx:  1,
                dy:  1
            }
        ],
        maxX: 300,
        maxY: 200
    },
    
    methods: {
        moverPelotas(){
            this.$refs.pelotas.forEach((pelota) => {
                pelota.mover();
            }
            )
        }
    },
    mounted() {
        setInterval(() => {
            this.moverPelotas()
        }, 50);
    }
})
"use strict";

let app = new Vue({
    el:"#app",
    data: {
        // "máscaras" es el objeto, y este tiene las características del array "imagenes", es decir, se llama al objeto, pero se recorren las características del array.  
        mascaras: '',
        // "imagenes" contiene todas las características llamadas en el HTML, se llaman en conjunto (imagen, nombre y definición)
        imagenes: [
            {
            imagen: "js/hyottoko.png",
            nombre:"Hyottoko",
            definicion:"Su nombre deriva de fuego y hombre, representa al espíritu que lleva una pañoleta blanca con puntos azules y sopla fuego a través de un tubo de bambú. Es considerado el Dios del Fuego."
        },
        {
            imagen:"js/okame.png",
            nombre: "Okame",
            definicion:"Diosa que brinda fortuna y la alegría, la máscara se usa para representar una forma idealizada de la belleza femenina, es el simil femenino de Hyottoko. "
        },
        {
            imagen:"js/oni.png",
            nombre: "Oni",
            definicion:"Los onis son demonios. Normalmente se representan en forma de caras rojas y enojadas con dientes largos y afilados, pero nos son los monstruos más temibles. Las máscaras se ocupan comúnmente en el festival de lanzamiento de frijoles.  "
        },
        {
            imagen:"js/tengu.png",
            nombre: "Tengu",
            definicion:"Los tengu son temibles semidioses que protegen las montañas. Estas criaturas demoniacas están representadas co caras rojas, expresiones de ira y la gran nariz. Las máscaras se ocupan en obras de teatro y algunos festivales sintoístas. "
        },
        {
            imagen:"js/kitsune.png",
            nombre: "Kitsune",
            definicion:"Llamadas máscaras de zorros, son usadas por los participantes en ciertos festivales sintoístas o sólo por diversión. Históricamente los zorros eran considerados criaturas mágicas con la capacidad para cambiar de forma."
        }
        ]
    }
})
Vue.component('listado_articulos', {
    props: ['lista_entrada'],
    template: `
    <div>
    <h1> Frutas Favortias </h1>
        Lista:
        <item_articulo v-for="art in lista_entrada" :articulo_entrada="art">
        </item_articulo>
    </div>`
})
Vue.component('item_articulo', {
    props: ['articulo_entrada'],
    template: `
    <div>
        <p>{{articulo_entrada.fruta}}</p>
    </div>`
})

var app = new Vue({
    el: '#app',
    data: {
        lista: [{
            fruta: "Manzana"
        },{
            fruta: "Frutilla"
        },{
            fruta: "Limón"
        },{
            fruta: "Vainilla"
        }]
    }
})
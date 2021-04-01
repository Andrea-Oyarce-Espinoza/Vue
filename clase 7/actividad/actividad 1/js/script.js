'use strict'

var app = new Vue({
    el: '#app',
    data: {
        texto: '',
        clase: '',
        mensaje: ''
    },
    methods: {
        ingresarTexto() {
            //Validacion del nombre
            if (this.texto  == '') {
                this.clase   =  'sinTexto'
                this.mensaje =  'El campo esta vacío.'
            } else {
                this.clase   = 'conTexto'
                this.mensaje = this.texto
            }
        }
    }
})
'use strict'

var app = new Vue({
    el: '#app',
    data: {
        edMarca           : '',
        edModelo          : '',
        edDescripcion     : '',
        edPrecio          : '',
        clMensaje         : '',
        mensaje           : '',
        logroOperacion    : true,
        errores           : [],
        lisPatentes       : [],
        mensajeSinPatentes: 'No existen patentes registradas en este momento.'
    },
    methods: {
        limpiarEntradas() {
            this.edMarca       = ''
            this.edModelo      = ''
            this.edDescripcion = ''
            this.edPrecio      = ''
        },
        validarEntradas() {
            this.errores       = []

            this.logroOperacion= true 

            if (this.edMarca   == '') {
                this.errores.push('La marca está vacía.')
                this.logroOperacion = false
            }

            if (this.edModelo == '') {
                this.errores.push('El modelo está vacío')
                this.logroOperacion = false
            }

            if (this.edDescripcion == '') {
                this.errores.push('La descripción está vacía.')
                this.logroOperacion = false
            }

            if (this.edPrecio == '') {
                this.errores.push('El precio está vacío.')
                this.logroOperacion = false
            } else {
                let numeroedicionPrecio = Number(this.edPrecio)
                if (numeroedicionPrecio < 0) {
                    this.errores.push('El precio no debe ser un valor negativo.')
                    this.logroOperacion = false
                }
            }
        },

        agrePatentes() {
            this.validarEntradas()

            if (!this.logroOperacion) {
                this.clMensaje = 'error'
                this.mensaje = 'Se han encontrado los siguientes errores:'
            } else {
                this.clMensaje = 'zero kills'
                this.mensaje = 'La patente se ha agregado exitosamente.'

                let nuevaPatente = {
                    marca: this.edMarca,
                    modelo: this.edModelo,
                    descripcion: this.edDescripcion,
                    precio: this.edPrecio
                }

                this.lisPatentes.push(nuevaPatente)

                this.limpiarEntradas()
            }
        }
    }
})
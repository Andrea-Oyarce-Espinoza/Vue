"use strict"

var app = new Vue({
    el: '#app',
    data: {
        nombre: '',
        edad: '',
        claseEtiqueta: 'etiqueta',
        claseMensaje: '',
        errores: []
    },
    methods: {
        validar(e) {
            this.errores   = []
            let validacion = true

            //Validacion del nombre
            if (this.nombre == '') {
                this.claseMensaje = 'error'
                this.errores.push('El nombre está vacío.')
                validacion        = false
            } else if(this.nombre.includes(' ')) {
                this.claseMensaje = 'error'
                this.errores.push('El nombre no puede contener espacios.')
                validacion        = false
            }

            //Validación de la edad. 
            if (this.edad == '') {
                this.claseMensaje  = 'error'
                this.errores.push('La edad está vacía.')
                validacion         = false 
            }  else if (!(this.edad >= 18 && this.edad <= 99)) {
                 this.claseMensaje = 'error'
                 this.errores.push('La edad debe ser entre 18 y 99 años.')
                 validacion        = false
            }
            if (!validacion) {
                e.preventDefault()
            }
            return validacion
        }
    }
})
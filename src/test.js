function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;

};

Persona.prototype = {
  saluda: function Saludar() {
    console.log('hola me llamo' + this.nombre + 'y tengo ' + this.edad + ' años');
  }
};

var levita = new Persona('andres', '100');
var passh = new Persona('passh', '99');


var Levitoide = Object.create(levita);
var passhoide = Object.create(passh);



Levitoide.saluda();




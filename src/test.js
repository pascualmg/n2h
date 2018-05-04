var foo = function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad=edad;
};

Persona.prototype = {
  saluda:function Saludar() {
    console.log('hola me llamo' + this.nombre + 'y tengo ' + this.edad + ' años');
  }
};

var bar = new foo('andres', '100');
var baz = new foo('passh', '99');




bar.saluda();
baz.saluda();

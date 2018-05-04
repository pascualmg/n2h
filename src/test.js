function Persona(sexo) {
  this.sexo = sexo;
};

Persona.prototype = {
  saluda: function Saludar() {
    console.log('hola me llamo ' + this.nombre + 'y soy ' + this.sexo);
  }
};

function Hombre(nombre) {
  Persona.call(this, 'macho cabezon');
  this.nombre = nombre;
}

Hombre.prototype = Persona.prototype;
Hombre.constructor = Hombre;



var levita = new Hombre('andres');


var passh = new Hombre('passh');

levita.saluda();
passh.saluda();

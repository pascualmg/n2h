function Persona(sexo) {
  this.sexo = sexo;
};

Persona.prototype = {
  saluda: function Saludar() {
    console.log('hola me llamo ' + this.nombre + ' y soy ' + this.sexo);
  }
};

function Hombre(nombre) {
  Persona.call(this, 'macho cabezon');
  this.nombre = nombre;
}

//extends...
Hombre.prototype = Object.create(Persona.prototype);

var levita = new Hombre('andres');

levita.saluda();



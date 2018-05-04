function Persona(sexo) {
  this.sexo = sexo;
};

Persona.prototype = {
  saluda: function Saludar() {
    console.log('hola me llamo ' + this.nombre + 'y soy ' + this.sexo);
  }
};


function Hombre(nombre) {
  Persona.call(this, 'varon');
  this.nombre = nombre;
}

Hombre.prototype = Object.create(Persona.prototype);
//Hombre.prototype.constructor = Hombre;
//Hombre.prototype = Persona.prototype;


var levita = new Hombre('andres');

console.log('levita.sexo',levita.sexo );//TODO: borrame.



levita.saluda();
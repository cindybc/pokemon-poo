function ataque(){
	var poke1 = document.getElementById("selectPoke1").value;
	var poke2 = document.getElementById("selectPoke2").value;
	
    
    document.getElementById("pelea").innerHTML+= poke1 + " ataco a " + poke2 + " y " + poke2 + " tiene una vida de " ;


function Pokemon(nombre, color, poderDeAtaque){
	this.nombre = nombre;
	this.color = color;
	this.nivelDeAmistad = 0;
	this.vida = 100;
	this.poderDeAtaque= poderDeAtaque;

	this.mostrarPokemon= function(){
		return("Hola, soy: " + this.nombre + " y soy de color: " + this.color);
	}

	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad = this.nivelDeAmistad + valor;
	}

	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderDeAtaque;
	}
};

const Pikachu = new Pokemon(poke1, "amarillo", 100);
const Charmander= new Pokemon(poke2, "rojo", 20);

poke1.atacar(poke2);
};



//console.log(Charmander.vida);
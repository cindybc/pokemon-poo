

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

function ataque(){
	var poke1 = document.getElementById("selectPoke1").value;
	var poke2 = document.getElementById("selectPoke2").value;
	
	var gamer1= new Pokemon(poke1,"verde", 400);
	var gamer2 = new Pokemon(poke2, "azul", 200);
	gamer1.atacar(gamer2);
    document.getElementById("pelea").innerHTML+= gamer1.nombre + " ataco a " + gamer2.nombre + " y " + gamer2.nombre + " tiene una vida de " + gamer2.vida;
   
};


//console.log(Charmander.vida);
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
  document.getElementById("pelea").innerHTML+= "<b>" + gamer1.nombre +"</b>" + " ataco a " + "<b>" + gamer2.nombre + "</b>"+ " y " + "<b>" + gamer2.nombre + "</b>" + " tiene una vida de " + "<b>" +  gamer2.vida + "</b>" ;


function iguales(){
	if(poke1 == poke2){
	  alert("Se esta atacando a si mismo, elija otro pokemon!!");
        return document.getElementById("pelea").innerHTML= "";
	 }
    }
iguales();
};





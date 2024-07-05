// Player.js

export class Player{

    //Propiedades

    name;                 // Player Name


    type = "Player";      // Propiedad definida
  
    constructor(name) {
      this.name = name;   // Modificamos el valor de la propiedad name
      console.log(`¡Bienvenido/a, ${this.name}!`);  // Accedemos al valor actual de la propiedad name
    }

    

  }
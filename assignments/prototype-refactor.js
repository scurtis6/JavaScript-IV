/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
class GameObject{
    constructor(attributes){
        this.createdAt = attributes.createdAt,
        this.name = attributes.name,
        this.dimensions = attributes.dimensions
      }
      destroy(){
          return `${this.name} was removed from the game.`;
      }
}

class CharacterStats extends GameObject{
    constructor(attributes){
        super(attributes);
        this.healthPoints = attributes.healthPoints
    };
    takeDamage(){
        return `${this.name} took damage`;
    };
};

class Humanoid extends CharacterStats{
    constructor(human){
        super(human);
        this.team = human.team,
        this.weapons = human.weapons,
        this.language = human.language
    };
    greet(){
        return `${this.name} offers a greeting in ${this.language}`;
    }
};

const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Stretch task: 

  class Villain extends Humanoid{
      constructor(attributes){
      super(attributes);
      this.power = attributes.power
    }
    evilPower(){
        return `${this.name} power is ${this.power}`
    }
  }

  class Hero extends Villain{
      constructor(attributes){
          super(attributes);
          this.attack = attributes.attack
      }
      health(){
          return `${this.name} defeats the villian with ${this.attack} ${this.weapons}`
      }
  }
  
  const fight = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 3,
      width: 3,
      height: 5,
    },
    healthPoints: 10,
    name: 'Dart',
    team: 'Bullseye Trube',
    weapons: [
      'Metal Darts',
    ],
    language: 'Solid Board',
    power: 'Shooting',
  });

  const survive = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 4,
      width: 4,
      height: 5,
    },
    healthPoints: 20,
    name: 'Thunder',
    team: 'Cloud Kindgdom',
    weapons: [
      'Lightening Bolts',
    ],
    language: 'High Speed',
    attack: 'Charging',
  });

  console.log(fight.evilPower())
  console.log(survive.health())
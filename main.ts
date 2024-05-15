#! /usr/bin/env node
// Adventure Game 
import inquirer from "inquirer";

console.log("Welcome to Code With Saba - Adventure Game");
console.log("-".repeat(55));

// Step 1 - Characters Hero & Enemy

class Hero {
    name: string;
    health:number = 100;    // Total health

    constructor(name:string){
        this.name = name
    }    
        
    decreaseHealth(){
        this.health -= 10
    }
    increaseHealth(){
        this.health = 100
    }
}

class Enemy {
    name: string;
    health:number = 100;    // Total health

    constructor(name:string){
        this.name = name
    }    
        
    decreaseHealth(){
        this.health -= 10
    }
    increaseHealth(){
        this.health = 100
    }
}

// Step 2 - Hero Object and Enemy Object

async function main(){
    const{heroName} = await inquirer.prompt([
        {
            type: "input",
            name: "heroName",
            message: "Enter Your Hero Name:"
        }
    ]);
    const{enemyType} = await inquirer.prompt([
        {
            type: "list",
            name: "enemyType",
            choices: ["Witch","Dragon","Ghost"],
            message: "Select the enemy you fight with:"
        }
    ]);

// Step 3 - Battle Field

const hero = new Hero(heroName);
const enemy = new Enemy(enemyType);
console.log(`${hero.name} V/S ${enemyType}`);

// Step 4 - Action Object

let action;

do{
    const{action} = await inquirer.prompt([
        {
            type: "list",
            name: "action",
            choices: ["Attack","Defend","Range","Target","Run"],
            message: "Choose the attack type to perform action:"
        }
    ]);

// Step 5 - Switch Case

switch(action){
    case "Attack" :
        const randomNumber = Math.random();
        if(randomNumber > 0.5){
            hero.decreaseHealth();
            console.log(`${hero.name} health: ${hero.health}`);
            console.log(`${enemy.name} health: ${enemy.health}`);
        if(hero.health <= 0){
            console.log("You Loss! Try Again")
            return;
            }   
        } else {
            enemy.decreaseHealth();
            console.log(`${enemy.name} health: ${enemy.health}`);
            console.log(`${hero.name} health: ${hero.health}`);
        if(enemy.health <= 0){
            console.log("Congratulation! You Won");
            return;
        }
    }
    break;
}
} while(true);
}
main();

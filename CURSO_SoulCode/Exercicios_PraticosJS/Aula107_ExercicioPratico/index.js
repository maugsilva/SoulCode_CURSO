// Crie pelo menos cinco objetos; // 
const mySelf = {
    name: "Matheus",
    secondname: "Augusto",
    age: 23,
    city: "Campinas",
    job: "Desenvolvedor Web front-end",
    favoriteAnime: "Neon Genesis Evangelion"
};

const person_one = {
    userName: "Carlos",
    seconName: "Dionisio",
    age: "30",
    City: "Campinas"
};

const person_two = {
    firstname: "Julio",
    surname: "Macio pai",
    age: 36,
    cityborn: "Campinas",
    favoriteGame: "Batman"
};

const person_03 = {
    usernameone: "Lemes",
    age: 27,
    citylive: "Campinas",
    drink: "Cerveja"
};

const person_boss = {
    nameboss: "Evandro",
    lastnameboss: "Martins",
    ageboss: 38,
    jobboss: "Supervisor"
};
/*Objeto 1 - Sobre mim */
mySelf.name = function () {
    return this.name + " " + this.favoriteAnime;
};
console.log(mySelf.name());

/*Objeto 2 */
person_one.name = function () {
    return this.userName + " " + this.age;
};
console.log(person_one.name());

/*Objeto 3 */
person_two.name = function () {
    return this.firstname + " " + this.surname;
};
console.log(person_two.name());


// Crie pelo menos dois objetos com construtores; //
function  Myself(first, last, age, job, favoriteanime) {
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.job = job;
    this.favoriteAnime = favoriteanime;
}

const myMath = new Myself ("Matheus", "Silva", 23, "Desenvolvedor Web front-end", "Neon Genesis Evangelion");
console.log(Myself);

function myBoss(first, last, age, job, son) {
    this.firstName =  first;
    this.lastName = last;
    this.Age = age;
    this.Job = job;
    this.Son = son;
}

const boss = new myBoss ("Evandro", "Martins", 38, "Supervisor", "Filha")
console.log(myBoss);

// Percorra pelo menos dois objetos / Faça impressões por meio de acesso em seus objetos; //

const cars = new Set (["Fiat", "Civic", "Onix", "HB20"]);

cars.forEach(function(value){
    console.log(value);
})

// Usando Maps //

const fruits = new Map ([
    ["Apples", 150],
    ["Oranges", 200],
    ["Bananas", 350],
    ["Pears", 250]
]);
console.log(fruits.get("apples"));

const fruits2 = new Map ();
fruits.set("apples", 500);
fruits.set("oranges", 400);
fruits.set("bananas", 300);
fruits.set("pears", 200);

console.log(fruits2.get("bananas"));

fruits.forEach(function(value, key){
    console.log(key + " - " + value);
})

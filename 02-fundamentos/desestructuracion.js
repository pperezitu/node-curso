const deadpool = {
    nombre: 'Wade',
    apellido: 'Wilson',
    poder: 'Regeneracion',
    getNombre () {
        return `${this.nombre} ${this.apellido}`
    }
}

const {nombre, apellido, poder, edad} = deadpool;

// console.log(deadpool.getNombre())
console.log(nombre, apellido, poder, 46);

const heroes = ['Deadpool', 'Hulk', 'Spiderman'];

const [h1, h2, h3] = heroes;

console.log(h1, h2, h3);
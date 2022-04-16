const animals = ['cat', 'dog', 'dolphin', 'monkey']

let inOneStringFromFor = ''
let inOneStringFromForEach = ''
for(let i = 0; i < animals.length; i++){
    const animal = animals[i]
    inOneStringFromFor += `${animal} `
}

animals.forEach(e=>{
    inOneStringFromForEach += `${e} `
})
console.log('inOneStringFromFor',inOneStringFromFor)
console.log('inOneStringFromForEach',inOneStringFromForEach)

const filterAn = animals.filter(e => e.length > 4)
console.log('animals after filter',filterAn)

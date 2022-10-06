//Traer la dependecia del componente suma
import {sumar,restar} from './sumar.js'
import estudiantes from './materias.js'
import materias from './materias.js'

/*
//let: variables
let a = 10
//const: constantes
const b = 29



console.log(`suma de a + b:${ sumar(a,b) }`)
console.log(`resta de a - b:${ restar(a,b) }`)
*/

//1. Recorrido arreglo foreach
materias.forEach((materia)=> {
    if (materia.profesor === 'Cristian') {
        console.log(`materia: ${materia.name}`)
        console.log(`Notas: ${materia.notas}`)
    }
})

//2. Convertir a un arreglo de profesores
//metodo map()
let profesores = materias.map(function (materia) {
    return materia.profesor
})

//3.Agregar una materia al arreglo de materias
//push()
materias.push({
    id:4,
        name: "Base de Datos",
        profesor: "Fernando",
        notas:[
            2.2,
            5,
        ]
})


//4. Busqueda de arreglos:
//find
 const PHP = materias.find(function (materia) {
    return materia.profesor === 'Cristian'
})
console.log(PHP)

/*
//desestructuracion
let {first_name,last_name,id} = estudiantes


console.log(`ID estudiante - ${id} `)
console.log(`Nombre estudiante - ${first_name} `)
console.log(`Apellido estudiante - ${last_name} `)

*/
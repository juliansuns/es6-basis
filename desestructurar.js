let colors = require('colors')

const estudiante1 =[" Jirlis  Daniela ", 
                    " Luara Jhuliana ",
                    " Valentina ", 
                    " Veronica "];

const estudiante2 =[" Camilo Ibañez ",
                    " Andres Mauricio ",
                    " Juan Camargo ",
                    " Julian Suns "];
//operador spread(resto)

const estudiante3 =['Danielucha Cucha',
                    ...estudiante1,
                    'Juliancho pancho',
                    ...estudiante2]

//desestructuracion arreglo:
console.log(estudiante3)

//TAREA CLASE UNO

const alumnosCurso = [
    { nombre: 'German David Neira Rivera', edad: 23 },
    { nombre: 'Santiago Pascual Plaus', edad: 32 },
    { nombre: 'Santiago Canosa', edad: 40 },
    { nombre: 'Francisco Campos', edad: 46 },
    { nombre: 'Daniel Andres Gallo Garcia', edad: 22 },
    { nombre: 'Juanse Calviño', edad: 28 },
    { nombre: 'Jorge Roldan', edad: 31 },
    { nombre: 'Leymar Gutierrez', edad: 42 },
    { nombre: 'Juan Jose Diaz', edad: 27 },
    { nombre: 'Matias Fernandez', edad: 29 },
    { nombre: 'Leandro Amaro', edad: 26 },
    { nombre: 'Franco Carini', edad: 31 },
    { nombre: 'Francisco Escobar Sabio', edad: 28 },
    { nombre: 'Pilar Castro', edad: 27 },
    { nombre: 'Sebastian Rodriguez', edad: 31 },
    { nombre: 'Carlos Martin Rodriguez', edad: 28 },
    { nombre: 'Pablo Aramayo', edad: 33 },
  ]
  
  // DISCLAIMER: La edad es ficticia y solo destinada para realizar los siguientes ejercicios
  
  // 1. Obtener un array de strings con solo nombres de cada alumno usando .map()

  const uno = alumnosCurso.map(nombres => nombres)
  console.log(uno)

  
  // 2. Obtener un array con aquellos alumnos mayores a 30 años usando .filter()
  const dos = alumnosCurso.filter(alumnos => alumnos.edad > 30)
  console.log(dos)


  // 3. Obtener un entero con la edad total de todos los alumnos usando .reduce() (Investigar)
  
    const tres = alumnosCurso.reduce((prev, element) => {
        return prev + element.edad
    }, 0)
    console.log(tres)

  // 4. Obtener en una constante la edad de "Leandro Amaro" usando .find() ( Investigar ) y destructuring del resultado

  const cuatro = alumnosCurso.find(element => element.nombre == 'Leandro Amaro')
  const {nombre} = cuatro
  console.log(nombre)
  
  // 5. Obtener en una constante primer alumno del array de alumnos usando destructuring y posteriormente en otra constante su nombre también
  const [primerNombre] = alumnosCurso
  console.log(primerNombre)

  const {nombre} = primerNombre
  console.log(nombre)

  // 6. Obtener un array con aquellos alumnos que empiezan con la letra "F", usando .filter()
  
  const seis = alumnosCurso.filter(alumnos => alumnos.nombre.startsWith('F'))
  console.log(seis)

  // 7. Obtener un array agregando una propiedad/key/atributo más a cada elemento usando .map()
  
  const siete = alumnosCurso.map(element => ({ausente: false , localidad: 'CABA',...element}))
  console.log(siete)


  // 8. Obtener a partir de la constante en 3, el promedio de edad del curso dividiendo la misma por el total de alumnos

/*   const [ , , tercerpuesto] = alumnosCurso
  console.log(tercerpuesto) */

   const b = alumnosCurso.reduce((acumulador, siguientevalor, index) => {
    const valores = acumulador + siguientevalor.edad
    return valores / index
  },3)

  console.log(b) 
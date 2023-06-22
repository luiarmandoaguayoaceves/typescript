//*Lo mas recomendable es usar const y let ya que Var puede generar muchos problemas var esta para viejos navegadores en ES5 pero actualmente muchos funcionan con mejores practicas en ES6
( () => {


    const a: string = 'Hola Armando desde la constante a'
    

    const saludar = (): void => {
        console.log(`hola Armando desde la funcion asignada a una constante saludar`); 
    }

})()
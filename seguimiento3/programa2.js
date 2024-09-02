let estudiantes = [101,201,303]
carrera = ["Medicina", "Derecho", "Enfermeria"]
creditos = ["futbol", "baloncesto", "Dibujo"]
cupos = 0
let usuario = parseInt(prompt("ingrese codigo"))
let usuario2 = prompt("ingrese carrera")

if(estudiantes.includes(usuario) && carrera.includes(usuario2)){
    alert("Usuario confirmado")
    tomacreditos = prompt("ingrese los creditos que quiere hacer")
    if(creditos.includes(tomacreditos)){
       inscripcion = prompt("Quieres hacer este credito? si/no")
       if(inscripcion == "si"){
        
        if (inscripcion.toLowerCase() === "si") {
            for ( let i = cupos; i = 20; i++) { 
                cupos++
                alert(`Estás inscrito. Quedan ${20 - cupos} cupos.`)
                
                if(cupos === 20){
                    alert("no hay mas cupos, no es posible registrarse")
                break
                }
            }   
        }else{ 
            alert("se cancelo inscripcion de credito")
       }
    } else {
        alert("Credito no encontrado")
    }
} else{
    alert("no te encontramos en la base de datos")
}

}
alert("gracias por inscribirse")
let ver = prompt("escribe Si para ver tipo de suscripcion")
    if(ver == "si"){
    alert("1. mes a 90.000, 2. trimestral a 270.000, 3. anual 1.080.000")
    }else{
        alert("Ok")
    }

let usuario = prompt("ingrese nomdre ")
let edad = parseInt(prompt("ingrese edad"))

let suscripcion = parseInt(prompt("tipo de suscripcion, 1 a 3"))
let membresia = 90000
let cuotas = 0

 if (edad < 18) {
     alert("No puedes suscribirse al gimnasio ya que eres menor de edad");

 } else if (edad >= 18) {
    if (suscripcion == 2) {
        cuotas = 6
        alert(`Elegiste ${suscripcion}. El costo total será de ${(membresia *= 3)} y tu número de cuotas será de ${cuotas}.`)
        } else if (suscripcion == "3") {
            cuotas = 24
            alert(`Elegiste ${suscripcion}. El costo total será de ${(membresia *= 12)} y tu número de cuotas será de ${cuotas}.`)
        } else if (suscripcion == 1) {
            alert(`El mes será de ${membresia}.`)
        } else {
            alert("Tipo de suscripción no reconocida.")
        }
 } 
 costoCuota = membresia / cuotas
alert(`${usuario} gracias por inscribirte al gimnasio, el costo total es ${membresia}, el numero de cuotas es ${cuotas} con valor ${costoCuota} cada una`)
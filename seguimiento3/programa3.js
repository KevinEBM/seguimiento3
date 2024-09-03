let reservas = []   

function verificarReserva(reserva3){
    for(let i = 0; i < reservas.length; i++){
        if (reservas[i].getTime() === reserva3.getTime()){
            alert("Uy lo siento, ya esta reservado en esta fecha")
            return true
        } 
    }
    return false
}
let usuario = prompt("ingrese nombre o grupo que quiere hacer la reserva")
let fechareserva = prompt("fecha del dia que quiere reservar (YYYY-MMM-DD)")
let horareserva = prompt("ingrese horas de inicio (HH:MM)")
let reserva2 = new Date(fechareserva + "T" + horareserva)

    if (isNaN(reserva2.getTime())) {
        alert("fecha no valida, intenta con otra")
    } else {
        if (verificarReserva(reserva2)) {
            alert("fecha ya reservada")
        } else {
            reservas.push(reserva2)
            alert(`Reserva para ${usuario} para el dia ${reserva2.toLocaleString()}`)
        }
    }

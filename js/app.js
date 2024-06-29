alert('Bienvenido al quiz cultural');
alert('Responde bien y avanzarás a la siguiente pregunta, responde mal y empezaras de cero');

function questions() {
    let pregunta1 = prompt('¿En qué año se disolvió el imperio romano? \n A)446 \n B)476 \n C)477').toLowerCase();
    if (pregunta1 === 'b') {
        alert('Correcto');
    } else {
        alert('Incorrecto');
        retry()
        return;
    }

    let pregunta2 = prompt('¿Cuántos años duró la Segunda Guerra Mundial? \n A)4 \n B)6 \n C)7').toLowerCase();
    if (pregunta2 === 'b') {
        alert('Correcto');
    } else {
        alert('Incorrecto');
        retry()
        return;
    }

    let pregunta3 = prompt('¿Cuál es el río más largo del planeta? \n A)Nilo \n B)Amazonas \n C)Mississippi ').toLowerCase();
    if (pregunta3 === 'a') {
        alert('Correcto');
    } else {
        alert('Incorrecto');
        retry()
        return;
    }

    let pregunta4 = prompt('¿En qué año se creó la bandera Argentina? \n A)1810 \n B)1813 \n C)1812').toLowerCase();
    if (pregunta4 === 'a') {
        alert('Correcto');
    } else {
        alert('Incorrecto');
        retry()
        return;
    }

    let pregunta5 = prompt('¿Cuál es la capital más grande del mundo? \n A) Londres \n B) Tokyo \n C) Berlín').toLowerCase();
    if (pregunta5 === 'b') {
        alert('Correcto');
    } else {
        alert('Incorrecto');
        retry()
        return;
    }

    alert('Felicidades! Has completado el Quiz')
}

questions();

function retry(){
let respuesta= prompt('Respuesta Incorrecta, ¿desea intentar de nuevo? Responde Si o No').toLowerCase();
if(respuesta === 'si'){
    questions()
}else{
    alert('Gracias por participar')
}
}
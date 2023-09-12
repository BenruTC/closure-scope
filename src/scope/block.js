function fruits(){
    if (true) {
        var fruit1 = 'Apple';
        let fruit2 = 'Kiwi';
        const fruit3 = 'Banana';
    }

    console.log(fruit1) // Se imprime porque puede acceder
    console.log(fruit2) //No puede acceder porque es scope de bloque, solo funciona en ese bloque
    console.log(fruit3) //block scope
}

fruits()
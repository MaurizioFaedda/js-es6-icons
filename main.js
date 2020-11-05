// definire un array di oggetti; ogni oggetto
// rappresenta un'icona, che è caratterizzata da:
// nome, prefisso, tipo e famiglia.


$(document).ready(function() {

    const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    }
];

    // Utilizzando la funzione forEach e il template
    // literal, visualizzare in pagina tutte le icone con il
    // proprio nome.

    // uso il forEach per scorrere tra gli oggetti
    icons.forEach((item) => {
        // per stampare l'icone devo creare la classe con 'family + prefix + name'---quindi vado a cercarle scorrendo tra le chiavi
        const {family, prefix, name} = item;

        // console.log(family, prefix, name);

        // creo una variabile dove salvo la struttura per stampare l'icona
        const icon_complete = $('.container').append(
            `
            <div>
                <i class="${family} ${prefix}${name}">
                </i>
            </div>
            `
        );

    });


    //  definire un array di colori e associare ad ogni
    // tipo di icona un colore.

    // creo un array di colori
    const colors = ['yellow', 'blue', 'red'];

    // creo il mio nuovo array che conterrà i miei tre type
    const types = [];

    // ho tre colori e tre type, quindi prima devo isolarmi i miei tre type per per poi poterli assocciarli

    // -------------------- con forEach ---------------
    // ciclo dentro icon
    // icons.forEach((item) => {
    //     const {type} = item;
    //     // pusho in un nuovo array ogni type una sola votla lo stesso
    //     // se il mio type è già presente quindi non faccio push
    //     if(!types.includes(type)) {
    //         types.push(type);
    //     }
    // });

    // -------------------- con filter ---------------
    const includes = icons.filter((item) => {
        const {type} = item;
        return !types.includes(type);
    });

    types.push(includes);


    console.log(types);


});

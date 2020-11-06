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

    // // uso il forEach per scorrere tra gli oggetti
    // icons.forEach((item) => {
    //     // per stampare l'icone devo creare la classe con 'family + prefix + name'---quindi vado a cercarle scorrendo tra le chiavi
    //     const {family, prefix, name} = item;
    //
    //     // console.log(family, prefix, name);
    //
    //     // creo una variabile dove salvo la struttura per stampare l'icona
    //     const icon_complete = $('.container').append(
    //         `
    //         <div>
    //             <i class="${family} ${prefix}${name}">
    //             </i>
    //         </div>
    //         `
    //     );
    //
    // });


    //  definire un array di colori e associare ad ogni
    // tipo di icona un colore.

    // creo un array di colori
    const colors = ['yellow', 'blue', 'red'];

    // creo il mio nuovo array che conterrà i miei tre type
    const types = [];

    // ho tre colori e tre type, quindi prima devo isolarmi i miei tre type per per poi poterli assocciarli

    // -------------------- con forEach ---------------
    // ciclo dentro icon
    icons.forEach((item) => {
        const {type} = item;
        // pusho in un nuovo array ogni type una sola votla lo stesso
        // se il mio type è già presente quindi non faccio push
        if(!types.includes(type)) {
            types.push(type);
        }



    });


    // // collego l'indice della poszione dei type con quella dei colori
    // types.forEach((item) => {
    //     const type_position = types.indexOf(item);
    //     const color_postion = colors[type_position];
    //     console.log(color_postion);
    //     console.log(type_position);
    // });

    // uso il forEach per scorrere tra gli oggetti
    icons.forEach((item) => {
        // per stampare l'icone devo creare la classe con 'family + prefix + name'---quindi vado a cercarle scorrendo tra le chiavi
        const {family, prefix, name, type} = item;

        // console.log(family, prefix, name);
        const type_position = types.indexOf(type);
        const color_postion = colors[type_position];

        // creo una variabile dove salvo la struttura per stampare l'icona
        const icon_complete = $('.container').append(
            `
            <div>
                <i class="${family} ${prefix}${name}" style="color:${color_postion}">
                </i>
            </div>
            `
        );

    });

    // creo un option nell'html e ciclo il value con gli elemnti dell'array type

    types.forEach((type) => {
        $('.opt').append(
            `
            <option value="${type}">
                ${type}
            </option>
            `
        );
    });

    // uso change per capire quando il valore è stato modificato ed eseguire il mio js
    $('.opt').change(() => {

        // al premere dell'opzione desiderata voglio che tutte le icone spariscano
        // in modo da poter stampare dopo solo quelle con il valore type selezionato. Quindi...
        $('.container').empty();

        // mi salvo il valore dell'opzione selezionata (il mio type corrente)
        const current_val= $('.opt').val();

        // con un filtro mi salvo solo le icone che hanno un elemento type uguale al valore dell'opzione scelta
        const current_type = icons.filter((item) => {
            return current_val == item.type
        });
        // console.log(current_type);

        // copia incolla della stampa precedente, ma invece di ciclare in tutte le icone ciclo e stampo solo le icone già filtrate in precedenza
        current_type.forEach((item) => {
            // per stampare l'icone devo creare la classe con 'family + prefix + name'---quindi vado a cercarle scorrendo tra le chiavi
            const {family, prefix, name, type} = item;

            // console.log(family, prefix, name);
            const type_position = types.indexOf(type);
            const color_postion = colors[type_position];

            // creo una variabile dove salvo la struttura per stampare l'icona
            const icon_complete = $('.container').append(
                `
                <div>
                    <i class="${family} ${prefix}${name}" style="color:${color_postion}">
                    </i>
                </div>
                `
            );

        });

    });







});

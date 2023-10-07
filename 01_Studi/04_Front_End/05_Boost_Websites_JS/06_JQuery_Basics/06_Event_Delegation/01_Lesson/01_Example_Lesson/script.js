// Exemple 1
/*
$(document).ready(() => {
    $('#email').on('focus', function() {
        alert('focalisation sur le champ email')
    })
});
*/

console.log("-----------------------------------------------")

// Exemple 2
/*
$(document).ready(() => {
    let form = $('#form')

    $('input').on('focus', function() {
        alert(`focalisation sur le champ ${$(this).attr('name')}`)
    })

    form.prepend('<input type="text" id="lastname" name="lastname" value="" />')
    form.prepend('<label for="lastname">Lastname :</label>')
});
*/

console.log("-----------------------------------------------")

// Exemple 3
/*
$(document).ready(() => {
    let form = $('#form')

    form.on('focus', 'input', function() {
        alert(`focalisation sur le champ ${$(this).attr('name')}`)
    })

    form.prepend('<input type="text" id="lastname" name="lastname" value="" />')
    form.prepend('<label for="lastname">Lastname :</label>')
});
*/
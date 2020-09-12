// exemple 1
let monTitre = document.getElementById('mon_titre');
monTitre.innerHTML = 'Bete de titre';
monTitre.style.backgroundColor = 'red';

/*
 5 == "5"     true
 5 === "5"    false

 */
setInterval(() => {
    if (monTitre.style.backgroundColor === 'red') {
        monTitre.style.backgroundColor = 'blue';
    } else {
        monTitre.style.backgroundColor = 'red';
    }
    //monTitre.style.backgroundColor === 'red' ?  monTitre.style.backgroundColor = 'blue' :  monTitre.style.backgroundColor = 'red';
}, 1000);


// exemple 2
let zone = document.getElementById('zone');
zone.innerHTML = '<h1>TEST</h1>' + zone.innerHTML;

let li = document.getElementsByTagName('li');
li[0].style.backgroundColor = 'red';

// exemple 3
let button = document.getElementById('consoleMessage');
let input = document.getElementById('consoleMessageValue');
button.addEventListener('click', function () {
    console.log(input.value)
});

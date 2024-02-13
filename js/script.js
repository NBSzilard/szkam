function play(event) {
    var button = event.target;
    var card = button.closest('.card');
    var eloado = card.querySelector('.card-text').innerText;
    var cim = card.querySelector('.card-title').innerText;
    document.getElementById('eloado').innerText = eloado;
    document.getElementById('cim').innerText = cim;
}


document.getElementById('play-btn').addEventListener('click', function() {
var button = this;

if (button.innerHTML === '▶️') {
    button.innerHTML = '⏸️';
} else {
    button.innerHTML = '▶️';
}
});
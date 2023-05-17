const form = document.getElementById('form');
const resp = document.getElementById('resp');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const peso = document.getElementById('racao').value;
    const consumo = document.getElementById('consumo').value;

    const pesoGr = peso * 1000
    const duracao = Math.floor(pesoGr / consumo)
    const sobra = pesoGr % consumo

    resp.innerText = (`Duração: ${duracao} dias`)
    if (sobra > 0){
        resp.innerText = (`Duração: ${duracao} dias e irá sobrar ${sobra}gr`)
    }

})
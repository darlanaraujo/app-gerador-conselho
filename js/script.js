const wrapper = document.querySelector('.wrapper');
const id = document.querySelector('.id');
const advice = document.querySelector('.advice');
const botao = document.querySelector('.btn-gerar');

// USANDO FETCH();
// Em termos de desempenho usando uma promessa eu senti um delay na execução do comando;

// function initMsg() {
//     fetch('https://api.adviceslip.com/advice').then(promessa => {
//         return promessa.json();
//     }).then(dados => {
//         dadosObj = dados.slip
//         id.innerHTML = `#${dadosObj.id}`;
//         advice.innerHTML = `"${dadosObj.advice}"`;
//     }).catch(erro => {
//         console.log(erro);
//     });
// }

// window.onload = () => {
//     initMsg();
// }

// botao.addEventListener('click', () => {
//     initMsg();
//     setTimeout(() => {
//         wrapper.classList.toggle('active');
//     }, 20);
// });



// USANDO XMLHTTPREQUEST();
// Com esse recurso a execução do mando é mais direta e não gera o delay;

function getApi(url) {
    let request = new XMLHttpRequest();
    request.open('GET', url, false);
    request.send()
    return request.responseText
}

function gerarMsg() {
    let getDados = getApi('https://api.adviceslip.com/advice');
    let dados = JSON.parse(getDados);

    id.innerHTML = `#${dados.slip.id}`;
    advice.innerHTML = `"${dados.slip.advice}"`;
}

botao.addEventListener('click', () => {
    gerarMsg()
    setTimeout(() => {
        wrapper.classList.toggle('active');
    }, 20);
});

window.onload = () => {
    gerarMsg();
}
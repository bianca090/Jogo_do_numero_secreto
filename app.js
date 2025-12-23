let listasDeNumerosSorteados = [];
let numerolimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas =1;

function exibirTextoNaTela (tag, Texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = Texto;
    responsiveVoice.speak(Texto, 'Brazilian Portuguese Female', {rate: 1.2 });
}
function exibirMensageminicial(){
    exibirTextoNaTela('h1', 'jogo do numero secreto');
    exibirTextoNaTela('p', 'escolha um numero entre 1 e 10');
}

exibirMensageminicial()
exibirTextoNaTela('h1', 'jogo do numero secreto');
exibirTextoNaTela('p', 'escolha um numero entre 1 e 10');

function verificarChute() {
    let chute = parseInt(document.querySelector('input').value);

    if (chute === numeroSecreto){ 
        exibirTextoNaTela ('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela ('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else { 
        if (chute > numeroSecreto) {  
            exibirTextoNaTela('p', 'o numero secreto é menor');
        } else{
            exibirTextoNaTela ('p',  'O numero secreto é maior');
        }
        tentativas ++;
        limparCampo();
    }
}
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numerolimite + 1);
    let quantidadeDeelementosNaLista = listasDeNumerosSorteados.length;

    if(quantidadeDeelementosNaLista == numerolimite){
        listasDeNumerosSorteados = [];
    }


    if (listasDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        listasDeNumerosSorteados.push(numeroEscolhido);
        console.log(listasDeNumerosSorteados);
        return numeroEscolhido;
    }
    } 
function limparCampo() {
    chute = document.querySelector('input'); 
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio ();
    limparCampo();
    tentativas =1;
    exibirMensageminicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}
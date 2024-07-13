const form= document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formEValido = false;

function validaNome(nomeCompleto) {//Aqui estamos criando uma função para definir se o nome é completo, ou seja, se tem mais de um nome no campo de nome.Para isso criamos uma function com o nome validaNome, esta function recebe o parâmetro nomeCompleto.
    const nomeComoArray = nomeCompleto.split(' ');//Na sequencia o nosso parâmetro nomeCompleto vai receber um split que tem o papel de adicionar elementos e neste caso aqui ele está adicionado um espaço em branco. Este espaço vai estar presente entre os nomes para separá-los. Por fim criamos uma variável cont de nome nomeComoArray para armazena-la.
    
    return nomeComoArray.length >= 2;//Aqui estamos definindo nosso retorno ele esta retornando o conteúdo da nossa const seguido de um length para percorrer este conteudo como se fosse um array. Como o conteúdo do nosso array se trata de um separador, então estamos definindo também quantas vezes ele será percorrido. Definimos que ele só será percorrido se for maior que 2, ou seja, se tivermos mais de 2 separadores no nosso nome. Isso foi feito para garantir que realmente estamos inserindo um nome completo eliminado até mesmo a possibilidade de usar apenas um nome composto.
}

form.addEventListener('submit', function(e) {//Aqui estamos adicionado um evento através do addEventListerner.Primeiro selecionamos o evento que vai ser modificado e depois definimos qual será sua nova funcionalidade, desta forma toda vez que tivermos um evento submit, a sua nova funcionalidade nova é disparada. Esta nova funcionalidade se trata de um evento que vai ser um parâmetro da nossa function e será representado pela letra 'e'. 
    
    e.preventDefault();//Aqui esta sendo definida a funcionalidade do novo evento representado pelo parâmetro 'e', se trata do preventDefault que tem a função de cancelar o comportamento padrão do nosso submit de reloader.
    
    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroContaBeneficiario.value}</b>`
    
    formEValido = validaNome(nomeBeneficiario.value)
    if (formEValido){
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';
       
    } else {
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
    //Aqui estamos criando uma variável const com o nome nomeBeneficiario que irá armazenar  o id de nome-beneficiario. Em seguida definimos nossa function validaNome contento o o value de nomeBeneficiario
})

nomeBeneficiario.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEValido = validaNome(e.target.value);
    

    if (!formEValido){
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }else {
        nomeBeneficiario.style = '';
        document.querySelector('.error-message').style.display = 'none';
    }
});
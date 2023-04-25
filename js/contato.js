/* Selecionando elementos a serem manipulados  */
const formulario = document.querySelector("form");
const campoCep = formulario.querySelector("#cep")
const campoEndereco = formulario.querySelector("#endereco");
const campoBairro = formulario.querySelector("#bairro");
const campoCidade = formulario.querySelector("#cidade");
const campoEstado = formulario.querySelector("#estado");
const status = formulario.querySelector("#status");
const botaoLocalizar = formulario.querySelector("#localizar-cep")

/*  Monitorando o evento de acionamento do botão localizar cep */
botaoLocalizar.addEventListener("click", function(event){
    event.preventDefault();

    //Pegar o cep digitado
    let cep = campoCep.value

    /* API (Web Service) ViaCEP
    www.viacep.com.br */

    /* "AJAX": Técnica de comunicação assíncrona */

    /* Etapa 1: preparar uma URL contendo o cep digitado e o caminho da API (ViaCep) */
    let url = `http://viacep.com.br/ws/${cep}/json/`;
    

    /* Etapa 2: acesse e inicie uma comunicação com o servidor da URL indicada */
    fetch(url)

    /* Etapa 3: .... e então, recupere a resposta do servidor no formato de objeto (JSON). Este objeto contem todas as informações do endereço referente ao CEP informado. */

    .then(function (resposta){
        return resposta.json()
    })
    /* herrow fuction
    .them (resposta => resposta.json() ) */

    /* Etapa 4: ... e então, extraia os dados da resposta e mostre na tela */
    .then( function(dados){
        console.log(dados)
    

    //Se existir o indicador "erro" no objeto dados
    if("erro" in dados){
        //Apresentamos a mensagem abaixo
        console.log("CEP não encontrado!")
    }else{ //Senão
        console.log("CEP não encontrado")
        
        campoEndereco.value = dados.logradouro;
        campoBairro.value = dados.bairro;
        campoCidade.value = dados.localidade;
        campoEstado.value = dados.uf;

    }
})

});
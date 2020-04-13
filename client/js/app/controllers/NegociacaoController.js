class NegociacaoController {

    constructor(){

        let  $ = document.querySelector.bind(document);
        this._imputData = $('#data');
        this._imputQuantidade = $('#quantidade');
        this._imputValor = $('#valor');
    }
    adiciona(event){

        event.preventDefault();
      
      let negociacao = new Negociacao(
        DateHelper.textoParaData(this._imputData.value),
          this._imputQuantidade.value,
          this._imputValor.value
      ); 

       console.log(negociacao);
       console.log(DateHelper.dataParaTexto(negociacao.data));
    
    }
}
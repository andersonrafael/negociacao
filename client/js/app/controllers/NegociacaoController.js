class NegociacaoController {

    constructor(){

        let  $ = document.querySelector.bind(document);
        this._imputData = $('#data');
        this._imputQuantidade = $('#quantidade');
        this._imputValor = $('#valor');
    }
    adiciona(event){
        event.preventDefault();

        let helper = new DateHelper();
      

      let negociacao = new Negociacao(
        helper.textoParaData(this._imputData.value),
          this._imputQuantidade.value,
          this._imputValor.value
      ); 

       console.log(negociacao);
       console.log(helper.dataParaTexto(negociacao.data));
    
    }
}
class NegociacaoController {

    constructor(){

        let  $ = document.querySelector.bind(document);
        this._imputData = $('#data');
        this._imputQuantidade = $('#quantidade');
        this._imputValor = $('#valor');
    }
    adiciona(event){
        event.preventDefault();

      let data = new Date(...this._imputData.value.split('-')
      .map((item,indice) => item - indice % 2)
      
      );

      let negociacao = new Negociacao(
          data,
          this._imputQuantidade.value,
          this._imputValor.value
      )

        console.log(negociacao);
        
       
    }
}
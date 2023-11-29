import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  resultado: string = "0";
  memoria: string = "";
  verifica_zero: boolean = true;
  operador_inserido: boolean = false;
  is_segundo_elemento: boolean = false;
  primeiro_elemento: string = "";
  segundo_elemento: string = "";
  operador: string = "";
  is_novo_calculo: boolean = false;


  constructor() { }

  digitos(valor: string) {
    if (this.is_novo_calculo) {
      this.resetar();
      if (this.is_segundo_elemento) {
        this.segundo_elemento += valor;
        this.resultado += valor;
      } else {
        if (this.verifica_zero) {
          this.resultado = valor;
          this.verifica_zero = false;
        } else {
          this.resultado += valor;
        }
      }
    } else {
      if (this.is_segundo_elemento) {
        this.segundo_elemento += valor;
        this.resultado += valor;
      } else {
        if (this.verifica_zero) {
          this.resultado = valor;
          this.verifica_zero = false;
        } else {
          this.resultado += valor;
        }
      }
    }
  }

  operadores(operador: string) {
    /*aqui estou atualizado o operador, caso queira trocar antes de 
    adicionar o 2 elemento, 
    */
    if (this.operador_inserido && this.segundo_elemento == "") {
      this.operador = operador;
      this.resultado = this.primeiro_elemento + this.operador;
    } else if (!this.operador_inserido && this.verifica_zero == false) {
      this.primeiro_elemento = this.resultado;
      this.resultado += operador;
      this.operador_inserido = true;
      this.operador = operador;
      this.is_segundo_elemento = true;
    }
  }



  calcular() {

    if (this.operador == "+" && this.segundo_elemento != "") {
      //this.memoria = this.resultado;
      this.resultado = (parseInt(this.primeiro_elemento) + parseInt(this.segundo_elemento)).toString();
      //this.memoria += "=" + this.resultado;
      this.memoria = this.primeiro_elemento + this.operador + this.segundo_elemento + "=" + this.resultado;
      this.is_novo_calculo = true;

    } else if (this.operador == "-" && this.segundo_elemento != "") {
      this.resultado = (parseInt(this.primeiro_elemento) - parseInt(this.segundo_elemento)).toString();
      this.memoria = this.primeiro_elemento + this.operador + this.segundo_elemento + "=" + this.resultado;
      this.is_novo_calculo = true;

    } else if (this.operador == "*" && this.segundo_elemento != "") {
      this.resultado = (parseInt(this.primeiro_elemento) * parseInt(this.segundo_elemento)).toString();
      this.memoria = this.primeiro_elemento + this.operador + this.segundo_elemento + "=" + this.resultado;
      this.is_novo_calculo = true;

    } else if (this.operador == "/" && this.segundo_elemento != "") {
      this.resultado = (parseInt(this.primeiro_elemento) / parseInt(this.segundo_elemento)).toString();
      this.memoria = this.primeiro_elemento + this.operador + this.segundo_elemento + "=" + this.resultado;
      this.is_novo_calculo = true;

      // <-- FUNCIONALIDADES NOVAS -->


      //adicionei porcentagem, multiplico o 1elemento e 2elemento e depois divido por 100
    } else if (this.operador == "%" && this.segundo_elemento != "") {
      this.resultado = ((parseInt(this.primeiro_elemento) * parseInt(this.segundo_elemento)) / 100).toString();
      this.memoria = this.primeiro_elemento + this.operador + this.segundo_elemento + "=" + this.resultado;
      this.is_novo_calculo = true;

      /* x ao quadrado 
       primeiro fiz this.resultado = ((parseInt(this.primeiro_elemento) * parseInt(this.primeiro_elemento)) ).toString();
       mas pensei melhor e faria mais sentido e iria melhorar o visual do codigo
       eu tirar o segundo elemento pq não precisa do 2 elemento para calcular ao quadrado
      */
    } else if (this.operador == "²" && this.primeiro_elemento !== "") {
      this.resultado = (parseInt(this.primeiro_elemento) ** 2).toString();
      this.memoria = this.primeiro_elemento + this.operador + "=" + this.resultado;
      this.is_novo_calculo = true;

    } else if (this.operador == "³" && this.primeiro_elemento !== "") {
      this.resultado = (parseInt(this.primeiro_elemento) ** 3).toString();
      this.memoria = this.primeiro_elemento + this.operador + "=" + this.resultado;
      this.is_novo_calculo = true;

      /*  para calcular a raiz quadrada precisei de metodo pronto
      fiz umas pesquisas e sem utilizar esse metodo, daria para fazer com
      uma formula de Newton mas ela não funciona muito bem com numeros grandes
      por isso optei por utilizar esse metodo
      */

    } else if (this.operador == "√" && this.primeiro_elemento !== "") {
      this.resultado = Math.sqrt(parseInt(this.primeiro_elemento)).toString();
      this.memoria = this.primeiro_elemento + this.operador + "=" + this.resultado;
      this.is_novo_calculo = true;

      /* para calcular a potencia, fiz da mesma maneira que para calcular ao quadrado
      apenas tirei o ** 2 e coloquei o 2 elemento 
      */

    } else if (this.operador == "^" && this.segundo_elemento !== "") {
      this.resultado = (parseInt(this.primeiro_elemento) ** parseInt(this.segundo_elemento)).toString();
      this.memoria = this.primeiro_elemento + this.operador + this.segundo_elemento + "=" + this.resultado;
      this.is_novo_calculo = true;

    } else {
      if (this.operador == "") {
        alert("Nenhum operador foi selecionado.")
      } /*else if (this.segundo_elemento == "" && this.operador == "") {
        alert("Nenhum elemento foi definido.")
      }*/ else {
        alert("O segundo elemento não foi definido.")
      }
    }
  }

  resetar() {
    this.memoria = "";
    this.resultado = "0";
    this.verifica_zero = true;
    this.operador_inserido = false;
    this.is_segundo_elemento = false;
    this.primeiro_elemento = "";
    this.segundo_elemento = "";
    this.is_novo_calculo = false;
  }

}
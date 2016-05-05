'use strict';

class Calculator {

  constructor() {
    this.clear();
    this._operators = ['c', '%', '/', '*', '-', '+'];
  }

  add(char) {
    const isOperator =  this.isOperatorValid(char);
    const isMinus = char === '-';
    const lastChar = this.operation[this.operation.length - 1];
    const isLastCharAnOperator = lastChar && this._operators.indexOf(lastChar) > -1;

    // El símbolo debe de ser número o operator.
    if (typeof char !== 'number' && !isOperator && char !== '.') {
      console.warn('Caracter invalido.');
      return;
    }

    // Sólo se puede añadir un menos al principio.
    if (!lastChar && isOperator && !isMinus) {
      console.warn('No se admite un operador que no sea menos al principio.');
      return;
    }

    if (isLastCharAnOperator && isOperator) {
      return;
    }


    // Solo puede haber un operador entre números.
    // ejemplo: 3+2, no puede ser 3+*2
    if (isLastCharAnOperator && isOperator) {
      this.operation += this.operation.slice(0, -1);
    }

    this.operation = this.operation + char;
  }


  calculate() {
    this.value = eval(this.operation);
    return this.value;
  }


  isOperatorValid(char) {
    return this._operators.indexOf(char) > -1;
  }

  // Limpiar calculadora
  clear() {
    this.operation = '';
    this.value = 0;
  }

}

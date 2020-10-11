export class Squares {
  constructor(number) {
    this.number = number;
  }

  get sumOfSquares() {
    let sumOfSquaresTempNum = this.number;
    let sum = 0;
    while (sumOfSquaresTempNum) {
      sum+=sumOfSquaresTempNum**2;
      sumOfSquaresTempNum--;
    }
    return sum;
  }

  get squareOfSum() {
    let squareOfSumTempNum = this.number;
    let sum = 0;
    while (squareOfSumTempNum) {
      sum+=squareOfSumTempNum;
      squareOfSumTempNum--;
    }
    return sum**2;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
export class Matrix {
  constructor(matrixString) {
    this.matrixStrings = matrixString.split('\n');
    this.matrixNumbers = this.matrixStrings.map((string) => {
      let charRow = string.split(' ');
      let numberRow = charRow.map((element) => parseInt(element));
      return numberRow;
    });
  }

  get rows() {
    return this.matrixNumbers;
  }

  get columns() {
    let columns = [];
    this.matrixNumbers.forEach((row) => {
      row.forEach((element, index) => {
        if (!columns[index]) {
          columns[index] = [];
          columns[index].push(element);
        } else {
          columns[index].push(element);
        }
      })
    })

    return columns;
  }
}
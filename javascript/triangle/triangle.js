export class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  isEquilateral() {
    if (this.side1 === 0 || this.side2 === 0 || this.side3 === 0) {
      return false;
    } else if (this.side1 === this.side2 && this.side1 === this.side3) {
      return true;
    } else {
      return false;
    }
  }

  isIsosceles() {
    if ((this.side1 + this.side2) < this.side3) {
      return false;
    } else if ((this.side1 + this.side3) < this.side2) {
      return false;
    } else if ((this.side2 + this.side3) < this.side1) {
      return false;
    } else {
      return (
        this.side1 === this.side2 ||
        this.side2 === this.side3 ||
        this.side1 === this.side3
      )
    }
  }

  isScalene() {
    if ((this.side1 + this.side2) < this.side3) {
      return false;
    } else if ((this.side1 + this.side3) < this.side2) {
      return false;
    } else if ((this.side2 + this.side3) < this.side1) {
      return false;
    } else {
      return (this.side1 !== this.side2 && this.side2 !== this.side3)
    }
  }
}
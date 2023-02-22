export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = "Yudai";
  static age: number = 24;

  static work() {
    // "Hey, guys! This is Yudai! Are you interested in TypeScript? Let's dive into TypeScript!"
    return `Hey, guys! This is ${this.firstName}! Are you interested in TypeScript? Let's dive into TypeScript!`;
  }
}

// アクセスできない
// console.log(isProgrammer);
console.log(Me.isProgrammer);

export {};

class Person {
  // TSではコンストラクタの引数にアクセス修飾子をつけることで初期化処理まで自動で行ってくれる
  constructor(public name: string, protected age: number){}
}

let taro = new Person('Taro', 30);
console.log(taro);

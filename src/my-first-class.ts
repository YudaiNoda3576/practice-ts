export{};
class Person{
    private readonly name: string;
    private readonly age: number
    constructor(name: string, age: number){
        this.name = name;
        this.age =age;
    }

    // publicは省略可能
    public getName(): string{
        return this.name;
    }

    // 上と同じ
    getAge(): number{
        return this.age;
    }

}

let taro = new Person("太郎", 29);
console.log(taro);

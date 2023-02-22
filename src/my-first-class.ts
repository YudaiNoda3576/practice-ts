export {};

class Person {
	private readonly name: string;
	private readonly age: number;
	protected nationality: string;

	constructor(name: string, age: number, nationality: string) {
		this.name = name;
		this.age = age;
		this.nationality = nationality;
	}

	// publicは省略可能
	public getName(): string {
		return this.name;
	}

	// 上と同じ
	getAge(): number {
		return this.age;
	}

}

class Android extends Person {
	constructor(name: string, age: number, nationality: string) {
		super(name, age, nationality);
	}

	// nameはprivateなのでアクセスできない
	// nationalityはprotectedなのでアクセスできる
	// profile(): string {
	// 	return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
	// }
}

let taro = new Person("太郎", 29, "Japan");
console.log(taro);

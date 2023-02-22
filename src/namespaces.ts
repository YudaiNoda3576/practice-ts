export {};

namespace Japanese {
	export namespace Tokyo {
		export class Person {
			constructor(public lastName: string, public firstName: string) {
			}
		}
	}

	export namespace Osaka {
		export class Person {
			constructor(public lastName: string, public firstName: string) {
			}
		}
	}
}

namespace English {
	export class Person {
		constructor(public lastName: string, public firstName: string, public middleName: string) {
		}
	}
}

const me = new Japanese.Osaka.Person('山田', '太郎');
console.log(me.lastName + ' ' + me.firstName);

const you = new Japanese.Tokyo.Person('山田', '花子');
console.log(you.lastName + ' ' + you.firstName);

const michael = new English.Person('Jackson', 'Michael', 'Joseph');
console.log(michael.firstName + ' ' + michael.middleName + ' ' + michael.lastName + ' ' + "< Poh!");

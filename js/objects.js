//Отфильтруйте анаграммы
// Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
// Пример:
// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Напишите функцию aclean(obj), которая возвращает массив слов, очищенный от анаграмм.

function aclean (obj) {
	let result = new Map();

	for (let key in obj) {
		let sorted = obj[key] // PAN
			.toLowerCase() // pan
			.split("") // ["p","a","n"]
			.sort() // ["a","n","p"]
			.join(""); // anp
		result.set(sorted, obj[key]);
	}

	return Array.from(result.values());
}

function printAnagramms (list) {
	for (let key in list) {
		console.log(list[key]);
	}
}

let anagramma = {1:"nap", 2:"teachers", 4:"cheaters", 5:"PAN", 6:"ear", 7:"era", 8:"hectares"};

console.log('############### Anagramma task ##############');

printAnagramms(anagramma);
console.log("//////////////After clean//////////////");
printAnagramms(aclean(anagramma)); // "nap,teachers,ear" or "PAN,heaters,era"

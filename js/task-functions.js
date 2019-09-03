// Task 16. Memoization
// RU: Создать функцию fiboMemo для вычисления чисел Фибоначчи по формуле
//     F0 = 0, F1 = 1, Fn = Fn-1 + Fn-2. Функция должна хранить те значения,
//     которые она уже вычисляла. Используя методы console.time(), console.timeEnd()
//     определите время вычисления функции fibo и функции fiboMemo.

console.log('############### fiboMemo ##############');

fiboMemo.memory = [];
fiboMemo.memory[0] = 0;
fiboMemo.memory[1] = 1;

function fiboMemo(n) {
	if (fiboMemo.memory[n]) return  fiboMemo.memory[n];
	fiboMemo.memory[n] = fibo(n);

	return fiboMemo.memory[n];
}

function fibo(n) {
	return n === 0 ? 0 : n===1 ? 1 : fibo(n-1) + fibo(n-2);
}

console.time('First call fiboMemo');
console.log('fiboMemo: ', fiboMemo(20));
console.timeEnd('First call fiboMemo');

console.time('First call fibo');
console.log('fibo: ', fibo(20));
console.timeEnd('First call fibo');

console.time('Second call fiboMemo');
console.log('fiboMemo: ', fiboMemo(20));
console.timeEnd('Second call fiboMemo');

console.time('Second call fibo');
console.log('fibo: ', fibo(20));
console.timeEnd('Second call fibo');
